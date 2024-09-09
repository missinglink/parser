const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('wrigley field', [
    [ { street: 'wrigley field' } ],
    [ { venue: 'wrigley field' } ],
    [ { locality: 'field' } ]
  ], false)

  assert('Martin Luther King Jr. Blvd.', [
    { street: 'Martin Luther King Jr. Blvd.' }
  ])

  assert('Martin Luther King Blvd.', [
    { street: 'Martin Luther King Blvd.' }
  ])

  assert('E Cesar Chavez St', [
    { street: 'E Cesar Chavez St' }
  ])

  assert('Riverbend Club Dr Se', [
    { street: 'Riverbend Club Dr Se' }
  ])

  assert('S Interstate 35', [
    { street: 'S Interstate 35' }
  ])

  assert('E William Cannon Dr', [
    { street: 'E William Cannon Dr' }
  ])

  assert('Branch Rd', [
    { street: 'Branch Rd' }
  ])

  assert('Manor Rd', [
    { street: 'Manor Rd' }
  ])

  assert('Fm 3009 TX', [
    { street: 'Fm 3009' }, { region: 'TX' }
  ])

  assert('1900 SE A ST, SAN FRANCISCO', [
    { housenumber: '1900' }, { street: 'SE A ST' },
    { locality: 'SAN FRANCISCO' }
  ])

  assert('1900 SE F ST, SAN FRANCISCO', [
    { housenumber: '1900' }, { street: 'SE F ST' },
    { locality: 'SAN FRANCISCO' }
  ])

  assert('22024 main st, ca', [
    { housenumber: '22024' }, { street: 'main st' },
    { region: 'ca' }
  ])

  // postcode allowed in first position when only 1 token
  assert('90210', [{ postcode: '90210' }])

  // postcode allowed in first position when only 1 token in section
  assert('90210, CA', [{ postcode: '90210' }, { region: 'CA' }])

  // postcode not allowed in first position otherwise
  assert('90210 Foo', [], false)

  // autocomplete street name jitter
  // note: we are only testing the street name stays the same throughout
  assert('N FISKE AVE', [{ street: 'N FISKE AVE' }])
  assert('N FISKE AVE P', [{ street: 'N FISKE AVE' }])
  assert('N FISKE AVE Po', [{ street: 'N FISKE AVE' }, { region: 'Po' }])
  assert('N FISKE AVE Por', [{ street: 'N FISKE AVE' }, { region: 'Por' }])
  assert('N FISKE AVE Port', [{ street: 'N FISKE AVE' }, { locality: 'Port' }])
  assert('N FISKE AVE Portl', [{ street: 'N FISKE AVE' }])
  assert('N FISKE AVE Portla', [{ street: 'N FISKE AVE' }])
  assert('N FISKE AVE Portlan', [{ street: 'N FISKE AVE' }])
  assert('N FISKE AVE Portland', [{ street: 'N FISKE AVE' }, { locality: 'Portland' }])
  assert('N DWIGHT AVE Portland O', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }])
  assert('N DWIGHT AVE Portland Or', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }, { region: 'Or' }])
  assert('N DWIGHT AVE Portland Ore', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }])
  assert('N DWIGHT AVE Portland Oreg', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }])
  assert('N DWIGHT AVE Portland Orego', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }])
  assert('N DWIGHT AVE Portland Oregon', [{ street: 'N DWIGHT AVE' }, { locality: 'Portland' }, { region: 'Oregon' }])

  assert('University of Hawaii', [{ venue: 'University of Hawaii' }])
  assert('University of Hawaii at Hilo', [{ venue: 'University of Hawaii at Hilo' }])

  assert('Highway 72', [{ street: 'Highway 72' }], true)
  assert('1210a Highway 10 W IA', [{ housenumber: '1210a' }, { street: 'Highway 10 W' }, { region: 'IA' }], true)
  assert('1210a State Highway 10', [{ housenumber: '1210a' }, { street: 'State Highway 10' }], true)
  assert('1389a County Road 42 IA', [{ housenumber: '1389a' }, { street: 'County Road 42' }, { region: 'IA' }], true)

  assert('9600 S Interstate 35 TX', [{ housenumber: '9600' }, { street: 'S Interstate 35' }, { region: 'TX' }], true)
  assert('9600 Interstate 35 TX', [{ housenumber: '9600' }, { street: 'Interstate 35' }, { region: 'TX' }], true)
  assert('Interstate 35', [{ street: 'Interstate 35' }], true)

  assert('Fm 3009, TX', [{ street: 'Fm 3009' }, { region: 'TX' }], true)

  assert('CA 72', [{ street: 'CA 72' }], true)
  assert('1210a IA 10 W IA', [{ housenumber: '1210a' }, { street: 'IA 10 W' }, { region: 'IA' }], true)
  assert('1210a California 10', [{ housenumber: '1210a' }, { street: 'California 10' }], true)
  assert('1389a IA 42 IA', [{ housenumber: '1389a' }, { street: 'IA 42' }, { region: 'IA' }], true)

  assert('1111 MD 760, Lusby, MD, USA', [{ housenumber: '1111' }, { street: 'MD 760' }, { locality: 'Lusby' }, { region: 'MD' }, { country: 'USA' }], true)

  // unit + unit number tests
  // assert('52 Ten Eyck St Apt 3 Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { unit_type: 'Apt' },
  // { unit: '3' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('52 Ten Eyck St Apt 3b Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { unit_type: 'Apt' },
  // { unit: '3b' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('52 Ten Eyck St Apt 3B Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { unit_type: 'Apt' },
  // { unit: '3B' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('52 Ten Eyck St Apt #3b Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { unit_type: 'Apt' },
  // { unit: '#3b' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('52 Ten Eyck St 3 Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('52 Ten Eyck St 3 Brooklyn NY', [
  // { housenumber: '52' }, { street: 'Ten Eyck St' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('6 Montague Terrace Apt #A2 Brooklyn NY', [
  // { housenumber: '6' },
  // { street: 'Montague Terrace' },
  // { unit_type: 'Apt' },
  // { unit: '#A2' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('6 Montague Terrace #2A Brooklyn NY', [
  // { housenumber: '6' },
  // { street: 'Montague Terrace' },
  // { unit: '#2A' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // assert('6 Montague Terrace Apt #A-2 Brooklyn NY', [
  // { housenumber: '6' },
  // { street: 'Montague Terrace' },
  // { unit_type: 'Apt' },
  // { unit: '#A-2' },
  // { locality: 'Brooklyn' },
  // { region: 'NY' }
  // ])

  // @todo: the #6 should be classified as a unit number
  assert('#6 Montague Terrace Brooklyn NY', [
    { street: 'Montague Terrace' },
    { locality: 'Brooklyn' },
    { region: 'NY' }
  ])

  assert('E Cesar Chavez St', [
    { street: 'E Cesar Chavez St' }
  ])

  assert('Riverbend Club Dr Se', [
    { street: 'Riverbend Club Dr Se' }
  ])

  assert('E William Cannon Dr', [
    { street: 'E William Cannon Dr' }
  ])

  // There was a bug where multiple interpretations were being
  // returned for this query because "Deerfield Beach" was interpreted
  // as a possible venue. This test checks for that regression.
  assert('3551 W. Hillsboro Blvd Deerfield Beach, FL 33442', [[
    { housenumber: '3551' },
    { street: 'W. Hillsboro Blvd' },
    { locality: 'Deerfield Beach' },
    { region: 'FL' },
    { postcode: '33442' }
  ]], false)

  assert('1384 Cambridge Beltway, Cambridge, MD 21613, USA', [[
    { housenumber: '1384' },
    { street: 'Cambridge Beltway' },
    { locality: 'Cambridge' },
    { region: 'MD' },
    { postcode: '21613' },
    { country: 'USA' }
  ]], false)

  // NYC Boroughs
  assert('866 E 178th St, Bronx, NY 10460, USA', [
    { housenumber: '866' },
    { street: 'E 178th St' },
    { locality: 'Bronx' },
    { region: 'NY' },
    { postcode: '10460' },
    { country: 'USA' }
  ])

  assert('866 E 178th St, Staten Island, NY 10460, USA', [
    { housenumber: '866' },
    { street: 'E 178th St' },
    { locality: 'Staten Island' },
    { region: 'NY' },
    { postcode: '10460' },
    { country: 'USA' }
  ])

  // 'Massachusetts' and 'MA' should be interchangeable and both
  // forms should allow 'Boston' to be parsed as a locality.
  assert('12 main st, boston massachusetts', [
    { housenumber: '12' },
    { street: 'main st' },
    { locality: 'boston' },
    { region: 'massachusetts' }
  ])
  assert('12 main st, boston ma', [
    { housenumber: '12' },
    { street: 'main st' },
    { locality: 'boston' },
    { region: 'ma' }
  ])

  // https://github.com/pelias/parser/issues/140
  assert('Broadway, Manhattan', [
    { street: 'Broadway' },
    { locality: 'Manhattan' }
  ])
  assert('24 Broadway, Manhattan', [
    { housenumber: '24' }, { street: 'Broadway' },
    { locality: 'Manhattan' }
  ])
  assert('Broadway 24, Manhattan', [
    { street: 'Broadway' }, { housenumber: '24' },
    { locality: 'Manhattan' }
  ])
  assert('East Broadway, Manhattan', [
    { street: 'East Broadway' },
    { locality: 'Manhattan' }
  ])
  assert('24 East Broadway, Manhattan', [
    { housenumber: '24' }, { street: 'East Broadway' },
    { locality: 'Manhattan' }
  ])
  assert('West Broadway, Manhattan', [
    { street: 'West Broadway' },
    { locality: 'Manhattan' }
  ])
  assert('24 West Broadway, Manhattan', [
    { housenumber: '24' }, { street: 'West Broadway' },
    { locality: 'Manhattan' }
  ])

  // These solutions aren't perfect but the cases exist to
  // ensure that 'parish' isnt being interpreted as a venue.
  // https://github.com/pelias/pelias/issues/912
  assert('Jefferson Parish', [{ locality: 'Jefferson' }])
  assert('Mills County', [{ locality: 'Mills' }])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`USA: ${name}`, testFunction)
  }

  testcase(test, common)
}
