console.log("it works!");

let Animal = {
  canEat: true,
  hasParents: true
}

let Cow = {
  givesMilk: true,
  __proto__: Animal
}

console.log(Cow.givesMilk);
console.log(Cow.canEat);

for (key in Cow) {
  console.log(key);
}