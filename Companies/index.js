export default [
  // Wayne Enterprises
  {
    _id: 'wayne-enterprises', // String
    name: 'Wayne Enterprises', // String
    description: '', // String
    alsoKnownAs: [
      'WayneCorp'
    ],
    employees: [
      'batman',
      'lucius-fox'
    ], // [Schema.Types.ObjectId]
    ownedBy: [
      'batman', // In the front-end, this defaults to 'realName', i.e. Bruce Wayne
    ], // [Schema.Types.ObjectId]
  },
  // Wayne Financial, subsidiary of Wayne Enterprises
  {
    _id: 'wayne-financial', // String
    name: 'Wayne Financial', // String
    description: '', // String
    subsidiaryOf: [ // This is an array, in case of mergers, such as if LexCorp and Wayne Enterprises went 50/50
      'wayne-enterprises', // By specifiying, you get owners, etc for free from the parent company
    ], // [Schema.Types.ObjectId]
  },
  // Van Criss Laboratories, subsidiary of Wayne Enterprises
  {
    _id: 'van-criss-laboratories', // String
    name: 'Van Criss Laboratories', // String
    description: '', // String
    subsidiaryOf: [
      'wayne-enterprises',
    ], // [Schema.Types.ObjectId]
  },
]
