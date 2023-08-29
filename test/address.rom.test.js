const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('Bulevardul Iuliu Maniu, Bucharest', [
    { street: 'Bulevardul Iuliu Maniu' }, { locality: 'Bucharest' }
  ])

  assert('Bdul Iuliu Maniu 111 Bucharest', [
    { street: 'Bdul Iuliu Maniu' }, { housenumber: '111' }, { locality: 'Bucharest' }
  ])

  assert('Splaiul Independenței 313', [
    { street: 'Splaiul Independenței' }, { housenumber: '313' }
  ])

  assert('15 Strada Doctor Carol Davila', [
    { housenumber: '15' }, { street: 'Strada Doctor Carol Davila' }
  ])

  assert('Calea Victoriei 54 Bucharest ', [
    { street: 'Calea Victoriei' }, { housenumber: '54' }, { locality: 'Bucharest' }
  ])

  assert('Piața Montreal 1', [
    { street: 'Piața Montreal' }, { housenumber: '1' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address ROMs: ${name}`, testFunction)
  }

  testcase(test, common)
}
