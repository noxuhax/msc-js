console.log("it works!");

const APIKey = '89dd95d1a1f1bc4a6d2666205b5b8b97';
const city = 'Glasgow';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;

let toCelsius = (kelvin) => {
  return kelvin - 273;
}

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);
xhr.send();
if (xhr.status != 200) {
  console.log(xhr.status + ' ' + xhr.statusText);
} else {
  let DATA = JSON.parse(xhr.responseText);
  console.log(DATA);
  document.body.innerHTML += toCelsius(DATA.main.temp);
}