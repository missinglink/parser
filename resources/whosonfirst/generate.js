const fs = require('fs')
const path = require('path')
const sqlite = require('better-sqlite3')
const dictPath = path.join(__dirname, 'dictionaries')

/**
 * Usage:
 * node resources/whosonfirst/generate.js /data/wof/sqlite/whosonfirst-data-admin-latest.db
 *
 * note: after running this command there may be many dictionaries
 * generated which are ignored by the .gitignore but still loaded when
 * the parser starts up.
 *
 * This is usually noticable as the start time is slow and the tests are failing.
 * It will only affect your local installation but can be difficult to debug.
 *
 * To remove generated files from your local tree which aren't included by the .gitignore:
 * git clean -fx resources/whosonfirst
 */

// generate dictionaries dir if it doesn't exist
if (!fs.existsSync(dictPath)) { fs.mkdirSync(dictPath) }

// validate input args
if (process.argv.length !== 3) {
  console.error('usage: node %s {dbpath.sqlite}', path.basename(__filename))
  process.exit(1)
}

// open db connection
const db = sqlite(process.argv[2], { readonly: true })

// generate SQL statement
const stmt = db.prepare(`
WITH properties AS (
  SELECT id, json_extract(body, '$.properties') AS body
  FROM geojson
)
SELECT
  properties.id,
  LOWER(TRIM(json_extract(properties.body, '$.wof:placetype'))) AS placetype,
  LOWER(TRIM(prop.path)) AS path,
  LOWER(TRIM(fullkey)) AS fullkey,
  LOWER(TRIM(prop.value)) AS value
FROM properties, json_tree(body) AS prop
WHERE prop.type = 'text'
AND (
  prop.path LIKE '$.name:%_x_preferred' OR
  prop.path LIKE '$.abrv:%_x_preferred' OR
  prop.fullkey = '$.wof:country' OR
  prop.fullkey = '$.wof:country_alpha3' OR
  prop.fullkey = '$.wof:shortcode' OR
  prop.fullkey = '$.wof:abbreviation'
)`)

// an array to hold all languages
var data = []

// language blacklist
var blacklist = ['unk', 'vol']

/**
 * { id: 85633337,
  placetype: 'country',
  path: '$.name:zho_x_preferred',
  value: '荷兰' }
 */

// load data in to memory
for (const row of stmt.iterate()) {
  if (!row.placetype.length) {
    console.error('invalid placetype: %d \'%s\' \'%s\'', row.id, row.path, row.placetype)
    continue
  }
  // if (!row.path.length) {
  //   console.error('invalid path: %d \'%s\'', row.id, row.path)
  //   continue
  // }
  if (!row.value.length) {
    // console.error('invalid value: %d \'%s\' \'%s\'', row.id, row.path, row.value)
    continue
  }

  // default lang
  let lang = 'all'

  // if it's an abbreviation field such as 'wof:country'
  // then write it under the catchall 'all' language, else:
  if (row.fullkey.substr(0, 6) !== '$.wof:') {
    // parse path
    let parts = row.path.match(/^\$\.(\w+):(\w+)$/)
    if (!parts || parts.length !== 3) {
      console.error('invalid path: %d \'%s\'', row.id, row.path)
      continue
    }

    // split language tag in to components
    let s = parts[2].split('_')
    lang = s.slice(0, s.length - 2).join('_')
  }

  // enforce langauge blacklist
  if (blacklist.includes(lang)) { continue }

  // generate in-memory data structure
  let field = row.fullkey.replace(/^\$\.([^[]*).*$/, '$1')
  if (!data[row.placetype]) { data[row.placetype] = {} }
  if (!data[row.placetype][field]) { data[row.placetype][field] = new Set() }
  data[row.placetype][field].add(row.value)

  // indicate activity
  // process.stderr.write('.')
}

// write to disk
for (let placetype in data) {
  // generate lang dir if it doesn't exist
  let placetypePath = path.join(dictPath, placetype)
  if (!fs.existsSync(placetypePath)) { fs.mkdirSync(placetypePath) }

  for (let field in data[placetype]) {
    let filePath = path.join(placetypePath, `${field}.txt`)

    // unlink file if exists
    if (fs.existsSync(filePath)) { fs.unlinkSync(filePath) }

    // write data to file
    fs.writeFileSync(filePath, Array.from(data[placetype][field]).sort().join('\n'))
  }
}
