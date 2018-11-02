export default [
  // Batman
  {
    _id: 'batman', // String
    abilities: [
      'genius-level-intellect',
      'expert-detective',
      'peak-human-physical-condition',
    ], // [Schema.Types.ObjectId]
    bornIn: 'gotham-city', // Schema.Types.ObjectId
    name: 'Batman', // String
    partnerships: [
      'superman'
    ], // [Schema.Types.ObjectId]
    realName: 'Bruce Wayne', // String
    residesIn: 'gotham-city', // Schema.Types.ObjectId
    species: 'human', // Schema.Types.ObjectId
  },
  // Superman
  {
    _id: 'superman', // String
    abilities: [
      'superhuman-speed',
      'superhuman-vision',
      'flight'
    ], // [Schema.Types.ObjectId]
    bornIn: 'kryptonopolis', // Schema.Types.ObjectId
    name: 'Superman', // String
    partnerships: [
      'batman'
    ], // [Schema.Types.ObjectId]
    realName: 'Clark Kent', // String
    residesIn: 'metropolis', // Schema.Types.ObjectId
    species: 'kryptonian', // Schema.Types.ObjectId
  }
]
