const StreetNumericClassifier = require('./StreetNumericClassifier')
const StreetNumericClassification = require('../classification/StreetNumericClassification')
const Span = require('../tokenization/Span')
const classifier = new StreetNumericClassifier()

module.exports.tests = {}

function classify (body) {
  let s = new Span(body)
  classifier.each(s, null, 1)
  return s
}

module.exports.tests.contains_numerals = (test) => {
  test('contains numerals: honours contains.numerals boolean', (t) => {
    let s = new Span('example')
    s.contains.numerals = true
    classifier.each(s, null, 1)
    t.deepEqual(s.classifications, {})
    t.end()
  })
}

module.exports.tests.polish_numeric_street = (test) => {
  let valid = [
    'listopada', 'maja', 'czerwca',
    'pułku', 'strzelców', 'piechoty'
  ]
  
  valid.forEach(token => {
    test(`polish numeric street: ${token}`, (t) => {
      let s = classify(token)
      t.deepEqual(s.classifications, {
        StreetNumericClassification: new StreetNumericClassification(token.length > 1 ? 1.0 : 0.2)
      })
      t.end()
    })
  })
}

module.exports.all = (tape, common) => {
  function test (name, testFunction){
    return tape(`StreetNumericClassifier: ${name}`, testFunction)
  }

  for(var testCase in module.exports.tests){
    module.exports.tests[testCase](test, common)
  }
}
