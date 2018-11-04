export default [
  // Justice League
  {
    _id: 'justice-league', // String
    name: 'Justice League', // String
    description: '', // String,
    bases: [
      'hall-of-justice'
    ], // [Schema.Types.ObjectId]
    friends: [
      'injustice-league'
    ], // [Schema.Types.ObjectId]
    foes: [], // [Schema.Types.ObjectId]
    members: [
      'batman',
      'superman',
      'wonder-woman'
    ], // [Schema.Types.ObjectId]
    publishers: [
      'dc-comics'
    ], // [Schema.Types.ObjectId]
  },
]
