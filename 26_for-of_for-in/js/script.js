console.log("it works!");

const buttons = document.querySelectorAll('button');

for (button of buttons) {
  button.style.backgroundColor = 'lightblue';
}

// for (key in buttons) {
  // button.style.backgroundColor = 'lightblue';
  // buttons[key].style.backgroundColor = 'lightblue';
// }

let person = {
  name: 'Sasha',
  lastName: 'Averin',
  age: '30',
  teacher: false
};

for (key in person) {
  console.log(person[key]);
}