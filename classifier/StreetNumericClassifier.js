const PhraseClassifier = require('./super/PhraseClassifier')
const StreetNumericClassification = require('../classification/StreetNumericClassification')
const libpostal = require('../resources/libpostal/libpostal')


// numeric streets languages
// languages which use street names that start with numbers
const prefix = ['pl']

class StreetNumericClassifier extends PhraseClassifier {
  setup () {
    this.index = {}
    libpostal.load(this.index, ['pl'], 'numeric_streets.txt', {
      lowercase: true,
    })
  }

  each (span) {
    // skip spans which contain numbers
    if (span.contains.numerals) { return }

    // use an inverted index for full token matching as it's O(1)
    if (this.index.hasOwnProperty(span.norm)) {
      span.classify(new StreetNumericClassification(1))
    }
  }
}

module.exports = StreetNumericClassifier
