const WordClassifier = require('./super/WordClassifier')
const UnitClassification = require('../classification/UnitClassification')

const PenthousePattern = /^#?ph[1-9A-Z]/i

const AllNumbersRegExp = /^#?\d+$/
const SingleLetterRegExp = /^#?[A-Za-z]$/
const NumbersThenLetterRegExp = /^#?\d+[A-Za-z]$/
const LetterThenNumbersRegExp = /^#?[A-Za-z]\d+$/

// based on https://stackoverflow.com/questions/9213237/combining-regular-expressions-in-javascript
function combineRegExps (...args) {
  var components = []

  args.forEach((arg) => {
    components = components.concat(arg._components || arg.source)
  })

  var combined = new RegExp('(?:' + components.join(')|(?:') + ')')
  return combined
}

const combinedUnitRegexp = combineRegExps(
  AllNumbersRegExp,
  SingleLetterRegExp,
  NumbersThenLetterRegExp,
  LetterThenNumbersRegExp
)

class UnitClassifier extends WordClassifier {
  each (span) {
    const prev = span.graph.findOne('prev')
    const hasPrevUnitTypeToken = prev && prev.classifications.hasOwnProperty('UnitTypeClassification')

    const maybeUnitToken = combinedUnitRegexp.test(span.body)

    // PhX pattern is always a unit
    if (PenthousePattern.test(span.body)) {
      span.classify(new UnitClassification(1))
    }

    // If the previous token in a unit word, like apt or suite
    // and this token is something like A2, 3b, 120, A, label it as a unit (number)
    if (hasPrevUnitTypeToken && maybeUnitToken) {
      span.classify(new UnitClassification(1))
    }

    // A unit token that starts with '#' is always a unit if it's not the first token
    if (maybeUnitToken && span.body[0] === '#' && prev) {
      span.classify(new UnitClassification(1))
    }
  }
}

module.exports = UnitClassifier
