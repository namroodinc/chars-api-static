export default [
  // Batmobile
  {
    _id: 'batmobile', // String
    name: 'Batmobile', // String
    description: '', // String
    madeBy: [
      'wayne-enterprises'
    ], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    weaponry: [
      'vulcan-gun'
    ], // [Schema.Types.ObjectId]
  },
  // Batplane
  {
    _id: 'batplane', // String
    name: 'Batplane', // String
    description: '', // String
    madeBy: [
      'wayne-enterprises'
    ], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    weaponry: [], // [Schema.Types.ObjectId]
  },
  // Invisible Plane
  {
    _id: 'invisible-plane', // String
    name: 'Invisible Plane', // String
    description: `
      The Invisible Plane is the superheroine Wonder Woman's venerable, though
      now seldom-used, mode of transport.
    `, // String
    madeBy: [], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    weaponry: [], // [Schema.Types.ObjectId]
  }
]
