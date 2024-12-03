const StreetClassification = require('../../classification/StreetClassification')

module.exports = [
  {
    // Main Street
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Rue Montmartre or Boulevard Charles De Gaulle
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'PersonClassification', 'StreetNameClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // 26th Street
    confidence: 0.87,
    Class: StreetClassification,
    scheme: [
      {
        is: ['OrdinalClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // 26 Street
    confidence: 0.86,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'RoadTypeClassification']
      }
    ]
  },
  {
    // The Stables
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StopWordClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PlaceClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // SW 26th
    confidence: 0.77,
    Class: StreetClassification,
    scheme: [
      {
        is: ['DirectionalClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['OrdinalClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // St Kilda Road
    confidence: 0.85,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonalSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Am Falkplatz
    confidence: 0.98,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StopWordClassification'],
        not: ['IntersectionClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['StopWordClassification']
      }
    ]
  },
  {
    // Martin Luther King Blvd.
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Martin Luther King Jr. Blvd.
    confidence: 0.81,
    Class: StreetClassification,
    scheme: [
      {
        is: ['PersonClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PersonalSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Rue De Paris
    confidence: 0.8,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StopWordClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Boulevard De La Paix
    confidence: 0.79,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StopWordClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StopWordClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Rue Saint Anne
    confidence: 0.91,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PersonalTitleClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'GivenNameClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Aleja Wojska Polskiego
    confidence: 0.91,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PlaceClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'GivenNameClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Aleja 11 Listopada
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'GivenNameClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // 11 Listopada
    confidence: 0.81,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetNumericClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // 11 Pułku Swoleżerów
    confidence: 0.79,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetNumericClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // 11 Pułku Strzelców Podhalańskich
    confidence: 0.79,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetNumericClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // 4 Pułku Piechoty Wojska Polskiego
    confidence: 0.79,
    Class: StreetClassification,
    scheme: [
      {
        is: ['NumericClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetNumericClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      },
      {
        is: ['StreetNumericClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Boulevard du Général Charles De Gaulle
    confidence: 0.81,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StopWordClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['PersonalTitleClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['AlphaClassification', 'GivenNameClassification', 'PersonClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Avenue Aristide Briand or Allée Victor Hugo
    confidence: 0.92,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetPrefixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['GivenNameClassification', 'AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['SurnameClassification'],
        not: ['StreetClassification', 'StreetPrefixClassification']
      }
    ]
  },
  {
    // Broadway Market
    confidence: 0.80,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetProperNameClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      },
      {
        is: ['StreetSuffixClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // Broadway
    confidence: 0.82,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetProperNameClassification'],
        not: ['StreetClassification', 'IntersectionClassification']
      }
    ]
  },
  {
    // +++ Main Street
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'StopWordClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  },
  {
    // Highway 27
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['RoadTypeClassification', 'ToponymClassification'],
        not: []
      },
      {
        is: ['NumericClassification'],
        not: []
      }
    ]
  },
  {
    // +++ +++ Main Street
    confidence: 0.84,
    Class: StreetClassification,
    scheme: [
      {
        is: ['AlphaClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'StopWordClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  },
  {
    // Main Street West
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      },
      {
        is: ['DirectionalClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'EndTokenSingleCharacterClassification']
      }
    ]
  },
  {
    // West Main Street
    confidence: 0.88,
    Class: StreetClassification,
    scheme: [
      {
        is: ['DirectionalClassification'],
        not: ['StreetClassification', 'IntersectionClassification', 'EndTokenSingleCharacterClassification']
      },
      {
        is: ['StreetClassification'],
        not: ['DirectionalClassification']
      }
    ]
  }
]
