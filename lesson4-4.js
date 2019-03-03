var totalMoney = prompt('сколько у вас с собой есть денег?');

var appleAmount = prompt('сколько вы купили яблок?');
var loafAmount = prompt('сколько вы купили батонов хлеба?');

var applePrice = prompt('сколько стоит одно яблоко?');
var loafPrice = prompt('сколько стоит один батон хлеба?');

let haveEnough = (totalMoney, appleAmount, loafAmount, applePrice, loafPrice) => {
  totalMoney = parseFloat(totalMoney);

  appleAmount = parseFloat(appleAmount);
  loafAmount = parseFloat(loafAmount);

  applePrice = parseFloat(applePrice);
  loafPrice = parseFloat(loafPrice);

  appleCost = appleAmount * applePrice;
  loafCost = loafAmount * loafPrice;

  if (totalMoney > appleCost + loafCost) {
    return 'Вам хватает денег на покупки';
  } else {
    return 'Вам не хватает денег';
  }
}

console.log(haveEnough(totalMoney, appleAmount, loafAmount, applePrice, loafPrice));