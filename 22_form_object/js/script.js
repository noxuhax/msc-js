console.log("it works!");

const form = document.forms[0];
const target = document.querySelector('.result__total')

form.onsubmit = function(e) {
  e.preventDefault();
  result = form.elements.amount.value * form.elements.price.value;
  target.innerHTML = result;
};