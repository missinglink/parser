const Classification = require('./Classification')

class StreetNumericClassification extends Classification {
  constructor (confidence, meta) {
    super(confidence, meta)
    this.label = 'street_numeric'
  }
}

module.exports = StreetNumericClassification
