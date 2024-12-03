const HouseNumberClassification = require('../../classification/HouseNumberClassification')

module.exports = [
  {
    // 10 bis / 10 ter
    confidence: 0.99,
    Class: HouseNumberClassification,
    scheme: [
      {
        is: ['HouseNumberClassification'],
        not: ['IntersectionClassification']
      },
      {
        is: ['StopWordClassification'],
        not: ['IntersectionClassification', 'PunctuationClassification']
      }
    ]
  }
]
