const WordClassifier = require('./super/WordClassifier')
const HouseNumberClassification = require('../classification/HouseNumberClassification')

// copied from: https://github.com/mapbox/carmen/blob/5489f0e67a4f31280ae1b9d091952c97280b83e7/lib/text-processing/termops.js#L269-L290
// note: \u0400-\u04FF represents a-z in the Cyrillic alphabet

class HouseNumberClassifier extends WordClassifier {
  each (span) {
    // skip spans which do not contain numbers
    if (!span.contains.numerals) { return }

    if (
      /^\d{1,5}[a-zA-Z\u0400-\u04FF]?$/.test(span.body) || // 10 or 10a Style
        /^(\d{1,5})-(\d{1,5})[a-zA-Z\u0400-\u04FF]?$/.test(span.body) || // 10-19 or 10-19a Style
        /^(\d{1,5})[a-zA-Z\u0400-\u04FF]?\/(\d{1,5})$/.test(span.body) || // 1/135 or 1b/135 Style
        /^(\d{1,5})([nsewNSEW])(\d{1,5})[a-zA-Z]?$/.test(span.body) || // 6N23 Style (ie Kane County, IL)
        /^([nsewNSEW])(\d{1,5})([nsewNSEW]\d{1,5})?$/.test(span.body) // W350N5337 or N453 Style (ie Waukesha County, WI)
        /^(\d{1,5}) (\d\/\d)?$/.test(span.body) || // 3 1/4 Style (ie Immenstadt im Allgäu, Germany)
        // /^\d{1,5}(к\d{1,5})?(с\d{1,5})?$/.test(span.body) // Russian style including korpus (cyrillic к) and stroenie (cyrillic с)        
    ) {
      let confidence = 1
      let prev = span.graph.findOne('prev')

      // Housenumber must not be preceded by unit type
      if (prev && prev.classifications.hasOwnProperty('UnitTypeClassification')) {
        return
      }

      // it's possible to have 5 digit housenumbers
      // but they are fairly uncommon
      if (/^\d{5}/.test(span.norm)) {
        confidence = 0.2
      } else if (/^\d{4}/.test(span.norm)) {
        confidence = 0.9
      }

      span.classify(new HouseNumberClassification(confidence))
    }
  }
}

module.exports = HouseNumberClassifier
