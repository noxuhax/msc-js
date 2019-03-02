console.log("it works!");

const image = document.querySelector('img');

console.log(image.hasAttribute('alt'));
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));

console.log(image.getAttribute('src'));
image.setAttribute('src', 'https://images.unsplash.com/photo-1480365648051-7a3c9e97d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
console.log(image.getAttribute('src'));
