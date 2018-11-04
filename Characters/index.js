export default [
  // Batman
  {
    _id: 'batman', // String
    abilities: [
      'genius-level-intellect',
      'expert-detective',
      'peak-human-physical-condition',
    ], // [Schema.Types.ObjectId]
    alias: 'Batman', // String
    alsoKnownAs: [
      'Bat of Gotham',
      'Bat Vigilante',
      'Guardian of Gotham',
      'Demon of Gotham'
    ],
    bornIn: 'gotham-city', // Schema.Types.ObjectId
    description: '', // String
    friends: [
      'superman',
      'wonder-woman',
    ], // [Schema.Types.ObjectId]
    foes: [
      'joker',
    ], // [Schema.Types.ObjectId]
    gadgets: [
      'grappling-gun',
    ], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
    realName: [
      'Bruce Wayne'
    ], // String
    residesIn: 'gotham-city', // Schema.Types.ObjectId
    species: [
      'human'
    ], // [Schema.Types.ObjectId]
    transport: [
      'batmobile',
      'batplane',
    ], // [Schema.Types.ObjectId]
    weaponry: [
      'batarang'
    ], // [Schema.Types.ObjectId]
  },
  // The Joker
  {
    _id: 'joker', // String
    abilities: [
      'criminal-mastermind',
      'expert-chemist'
    ], // [Schema.Types.ObjectId]
    alias: 'Joker', // String
    alsoKnownAs: [
      'Clown Prince of Crime'
    ],
    bornIn: 'gotham-city', // Schema.Types.ObjectId
    description: '', // String
    friends: [], // [Schema.Types.ObjectId]
    foes: [
      'batman',
    ], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
    realName: [], // String
    residesIn: 'gotham-city', // Schema.Types.ObjectId
    species: [
      'human'
    ], // [Schema.Types.ObjectId]
    transport: [], // [Schema.Types.ObjectId]
    weaponry: [
      'joker-venom',
      'electric-joy-buzzer',
      'razor-sharp-playing-cards',
      'acid-flower',
      'boxing-glove-arm',
    ], // [Schema.Types.ObjectId]
  },
  // Superman
  {
    _id: 'superman', // String
    abilities: [
      'superhuman-speed',
      'superhuman-vision',
      'flight',
    ], // [Schema.Types.ObjectId]
    alias: 'Superman', // String
    alsoKnownAs: [
      'Man of Steel',
      'Son of Krypton',
    ],
    bornIn: 'kryptonopolis', // Schema.Types.ObjectId
    description: '', // String
    friends: [
      'batman',
      'wonder-woman',
    ], // [Schema.Types.ObjectId]
    foes: [
      'lex-luthor'
    ],
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
    realName: 'Clark Kent', // String
    residesIn: 'metropolis', // Schema.Types.ObjectId
    species: [
      'kryptonian'
    ], // [Schema.Types.ObjectId]
    transport: [], // [Schema.Types.ObjectId]
    weaponry: [], // [Schema.Types.ObjectId]
  },
  // Wonder Woman
  {
    _id: 'wonder-woman', // String
    abilities: [
      'superhuman-strength',
      'flight',
    ], // [Schema.Types.ObjectId]
    alias: 'Wonder Woman', // String
    alsoKnownAs: [
      'Diana of Themyscira',
      'Goddess',
      'Princess Diana',
    ],
    bornIn: 'themyscira', // Schema.Types.ObjectId
    description: '', // String
    friends: [
      'superman',
      'batman',
    ], // [Schema.Types.ObjectId]
    foes: [], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
    realName: 'Diana Prince', // String
    residesIn: 'paris', // Schema.Types.ObjectId
    species: [
      'amazonian',
      'olympian'
    ], // [Schema.Types.ObjectId]
    transport: [
      'invisible-plane'
    ], // [Schema.Types.ObjectId]
    weaponry: [
      'lasso-of-truth',
    ], // [Schema.Types.ObjectId]
  }
]
