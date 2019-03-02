const userNumber = parseInt(prompt("Ваше число"));

if (userNumber < 0) {
  var output = userNumber * -1;
} else {
  var output = userNumber;
}
console.log(output);