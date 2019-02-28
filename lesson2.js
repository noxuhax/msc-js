var moneyAnount = parseFloat(prompt('сколько у вас с собой есть денег?'));

var appleCount = parseFloat(prompt('сколько вы купили яблок?'));
var breadCount = parseFloat(prompt('сколько вы купили батонов хлеба?'));

var appleCost = parseFloat(prompt('сколько стоит одно яблоко?')) * appleCount;
var breadCost = parseFloat(prompt('сколько стоит один батон хлеба?')) * breadCount;

document.body.innerHTML = Boolean(moneyAnount > appleCost + breadCost);