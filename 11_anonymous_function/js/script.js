console.log("it works!");

let myFunction = function(element, color) {
  element.style['background-color'] = color;
}

const heading = document.querySelector('h1');
const text = document.querySelector('p');

myFunction(heading, '#fc0');
myFunction(text, '#cf9');