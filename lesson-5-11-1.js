let names = [
  [
    ['куры', 'гуси', 'павлины'],
    ['сокол', 'орел', 'соловей']
  ],
  [
    ['собака', 'кошка'],
    ['обезьяна', 'рысь']
  ]
];

for (parentArray of names) {
  for (group of parentArray) {
    group.forEach(animal => {
      console.log(animal);
    })
  }
}