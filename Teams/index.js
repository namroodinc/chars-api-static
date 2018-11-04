export default [
  // Justice League
  {
    _id: 'justice-league', // String
    name: 'Justice League', // String
    description: '', // String,
    bases: [
      'hall-of-justice'
    ], // [Schema.Types.ObjectId]
    friends: [], // [Schema.Types.ObjectId]
    foes: [
      'injustice-league'
    ], // [Schema.Types.ObjectId]
    members: [
      'batman',
      'superman',
      'wonder-woman'
    ], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
  },
  // Justice League
  {
    _id: 'injustice-league', // String
    name: 'Injustice League', // String
    description: '', // String,
    bases: [], // [Schema.Types.ObjectId]
    friends: [], // [Schema.Types.ObjectId]
    foes: [
      'justice-league'
    ], // [Schema.Types.ObjectId]
    members: [
      'joker',
      'lex-luthor',
    ], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
  },
]
