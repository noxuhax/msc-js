const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
if (computer == 0) {
  var computerReadable = "rock";
} else if (computer == 1) {
  var computerReadable = "scissors";
} else {
  var computerReadable = "paper";
}

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if (player == computer) {
  var gameResult = "tie!";
} else if (player == 0 && computer == 1 || player == 1 && computer == 2 || player == 2 && computer == 0) {
  var gameResult = "player win";
} else {
  var gameResult = "computer win";
}
console.log("computer played " + computerReadable);
console.log(gameResult);