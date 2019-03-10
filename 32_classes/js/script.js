console.log("it works!");

let Users = {
  hasAccessToProfile: true,
  approved: true,
  sayHi: function() { return 'Hi!' }
}

function User(name, email, password) {
  // коснтруктор
  this.name = name;
  this.email = email;
  this.password = password;
  this.__proto__ = Users;
}

const Fedya = new User('Федя', 'fedya@mail.ru', 'qwerty');

console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
  // коснтруктор
  this.name = name;
  this.email = email;
  this.password = password;
  this.__proto__ = Users;
  this.sayHi = function() { return 'Привет, ' + this.name + '! Ты зарегистрирована' }
}

const Alla = new FUser('Алла', 'alla@mail.ru', 'qwerty');

console.log(Alla);
console.log(Alla.sayHi());