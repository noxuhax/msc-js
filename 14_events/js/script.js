console.log("it works!");

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

let state = 'hidden';

button.addEventListener('click', function() {
  if (state == 'hidden') {
    paragraph.style['display'] = 'block';
    state = 'visible';
  } else {
    paragraph.style['display'] = 'none';
    state = 'hidden';
  }
});