const StreetSuffixClassifier = require('./StreetSuffixClassifier')
const StreetSuffixClassification = require('../classification/StreetSuffixClassification')
const Span = require('../tokenization/Span')

module.exports.tests = {}

function classify (body) {
  let c = new StreetSuffixClassifier()
  let s = new Span(body)
  c.each(s, null, 1)
  return s
}

module.exports.tests.contains_numerals = (test) => {
  test('contains numerals: honours contains.numerals boolean', (t) => {
    let c = new StreetSuffixClassifier()
    let s = new Span('example')
    s.contains.numerals = true
    c.each(s, null, 1)
    t.deepEqual(s.classifications, {})
    t.end()
  })
}

module.exports.tests.single_character_tokens = (test) => {
  test('index: does not contain single char tokens', (t) => {
    let c = new StreetSuffixClassifier()
    t.false(Object.keys(c.index).some(token => token.length < 2))
    t.end()
  })
}

module.exports.tests.english_suffix = (test) => {
  let valid = [
    'street', 'st', 'st.',
    'road', 'rd', 'rd.',
    'boulevard', 'blvd', 'blvd.'
  ]

  valid.forEach(token => {
    test(`english suffix: ${token}`, (t) => {
      let s = classify(token)
      t.deepEqual(s.classifications, {
        StreetSuffixClassification: new StreetSuffixClassification(token.length > 1 ? 1.0 : 0.2)
      })
      t.end()
    })
  })
}

module.exports.tests.german_suffix = (test) => {
  let valid = [
    'straße', 'strasse', 'str', 'str.',
    'platz', 'pl.',
    'allee', 'al', 'al.',
    'weg', 'w.'
  ]

  valid.forEach(token => {
    test(`german suffix: ${token}`, (t) => {
      let s = classify(token)
      t.deepEqual(s.classifications, {
        StreetSuffixClassification: new StreetSuffixClassification(token.length > 1 ? 1.0 : 0.2)
      })
      t.end()
    })
  })
}

module.exports.tests.valid_pelias_street_types = (test) => {
  let valid = ['paku']

  valid.forEach(token => {
    test(`valid pelias street types: ${token}`, (t) => {
      let s = classify(token)
      t.deepEqual(s.classifications, {
        StreetSuffixClassification: new StreetSuffixClassification(token.length > 1 ? 1.0 : 0.2)
      })
      t.end()
    })
  })
}

module.exports.tests.invalid_pelias_street_types = (test) => {
  let invalid = ['and']

  invalid.forEach(token => {
    test(`invalid pelias street types: ${token}`, (t) => {
      let s = classify(token)
      t.deepEqual(s.classifications, {})
      t.end()
    })
  })
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`StreetSuffixClassifier: ${name}`, testFunction)
  }

  for (var testCase in module.exports.tests) {
    module.exports.tests[testCase](test, common)
  }
}
