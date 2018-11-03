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
    bornIn: 'gotham-city', // Schema.Types.ObjectId
    description: '', // String
    partnerships: [
      'superman',
      'wonder-woman',
    ], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    realName: 'Bruce Wayne', // String
    residesIn: 'gotham-city', // Schema.Types.ObjectId
    species: [
      'human'
    ], // [Schema.Types.ObjectId]
    transport: [
      'batmobile',
      'batplane',
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
    bornIn: 'kryptonopolis', // Schema.Types.ObjectId
    description: '', // String
    partnerships: [
      'batman',
      'wonder-woman',
    ], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    realName: 'Clark Kent', // String
    residesIn: 'metropolis', // Schema.Types.ObjectId
    species: [
      'kryptonian'
    ], // [Schema.Types.ObjectId]
    transport: [], // [Schema.Types.ObjectId]
  },
  // Wonder Woman
  {
    _id: 'wonder-woman', // String
    abilities: [
      'superhuman-strength',
      'flight',
    ], // [Schema.Types.ObjectId]
    alias: 'Wonder Woman', // String
    bornIn: 'themyscira', // Schema.Types.ObjectId
    description: '', // String
    partnerships: [
      'superman',
      'batman',
    ], // [Schema.Types.ObjectId]
    publisher: 'dc-comics', // Schema.Types.ObjectId
    realName: 'Diana Prince', // String
    residesIn: 'paris', // Schema.Types.ObjectId
    species: [
      'amazonian',
      'olympian'
    ], // [Schema.Types.ObjectId]
    transport: [
      'invisible-plane'
    ], // [Schema.Types.ObjectId]
  }
]
