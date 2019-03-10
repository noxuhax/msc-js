console.log("it works!");

const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundImage = 'linear-gradient(' + (45 + i*25) + 'deg, red, yellow)';
}