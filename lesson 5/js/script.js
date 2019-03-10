const widgetTarget = document.querySelector('.cryptoprices-widget');

let cryptoPrices = [];

let crypto = [
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Litecoin",
    price: 140
  }
]

// Find the most expensive one first to build scale
crypto.forEach(currency => cryptoPrices.push(currency.price));
cryptoPrices.sort((a, b) => b - a);
const biggestPrice = cryptoPrices[0];

// Render widget
crypto.forEach(currency => {
  widgetTarget.innerHTML += '<div class="cryptoprices-widget__currency">' +
    '<h6 class="cryptoprices-widget__title">' +
      '<div class="cryptoprices-widget__name">' +
        currency.name +
      '</div>' +
      '<p class="cryptoprices-widget__price">' +
        '(' + currency.price + ')' +
      '</p>' +
    '</h6>' +
    '<i class="cryptoprices-widget__graph" style="--graph-var:' + (currency.price / biggestPrice * 100) + ';"></i>' +
  '</div>'
})