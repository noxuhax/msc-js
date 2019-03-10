console.log("it works!");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  sayHi() {
    return 'Hello ' + this.name;
  }
}

class Female extends User {
  sayHi() {
    return 'Hello ' + this.name + '! Ты зарегистрирована';
  }
}

const Dwight = new User('Dwight', 'd.schrute@dmifflin.com', 'qwertyuiop');
console.log(Dwight);
console.log(Dwight.sayHi());

const Pam = new Female('Pam', 'pam@dmifflin.com', '123456');
console.log(Pam);
console.log(Pam.sayHi());