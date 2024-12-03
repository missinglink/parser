const testcase = (test, common) => {
  let assert = common.assert(test)

  assert('Szewska 6, Kraków', [
    { street: 'Szewska' }, { housenumber: '6' },
    { locality: 'Kraków' }
  ])

  assert('aleja Wojska Polskiego 178', [
    { street: 'aleja Wojska Polskiego' }, { housenumber: '178' }
  ])

  assert('aleja 29 listopada 11', [
    { street: 'aleja 29 listopada' }, { housenumber: '11' }
  ])

  assert('aleja Wojska 178', [
    { street: 'aleja Wojska' }, { housenumber: '178' }
  ])

  assert('Ulica Strzelecka 12, Nowy Sącz', [
    { street: 'Ulica Strzelecka' }, { housenumber: '12' },
    { locality: 'Nowy Sącz' }
  ])

  assert('Żorska 11, 47-400', [
    { street: 'Żorska' }, { housenumber: '11' },
    { postcode: '47-400' }
  ])

  assert('11 listopada 2/4', [
    { street: '11 listopada' }, { housenumber: '2/4' }
  ])

  assert('1 Pułku Strzelców Bytomskich 2-4', [
    { street: '1 Pułku Strzelców Bytomskich' }, { housenumber: '2-4' }
  ])

  assert('3 Warszawskiego Pułku Strzelców Polskich 11', [
    { street: '3 Warszawskiego Pułku Strzelców Polskich' }, { housenumber: '11' }
  ])

  assert('1 Pułku Szwoleżerów 178', [
    { street: '1 Pułku Szwoleżerów' }, { housenumber: '178' }
  ])
}

module.exports.all = (tape, common) => {
  function test (name, testFunction) {
    return tape(`address POL: ${name}`, testFunction)
  }

  testcase(test, common)
}
