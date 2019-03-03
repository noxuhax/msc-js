const form = document.forms[0];
const target = document.querySelector('.result__sin')

form.onsubmit = function(e) {
  e.preventDefault();
  angle = form.elements.angle.value * 0.0174533; // to Rad
  result = Math.sin(angle);
  result = Math.round(result * 100) / 100; // Get rid of extra decimals
  target.innerHTML = result;
};