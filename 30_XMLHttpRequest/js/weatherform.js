const APIKey = '89dd95d1a1f1bc4a6d2666205b5b8b97';
// const city = 'Glasgow';
const form = document.forms[0];
const resultTarget = document.querySelector('.result')
let xhr = new XMLHttpRequest();

form.onsubmit = function(e) {
  e.preventDefault();
  city = form.elements.city.value;
  url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=metric';
  xhr.open('GET', url, false);
  xhr.send();
  if (xhr.status == 200) {
    let DATA = JSON.parse(xhr.responseText);
    resultTarget.innerHTML = 'Current temperature in '+
      '<span class="result__city">' + city + '</span>' +
      ' is ' + Math.round(DATA.main.temp) + '°C' +
      '<br>' +
      'Wind speed is ' +
      Math.round(DATA.wind.speed) + ' m/s';
  } else if (xhr.status == 404) {
    resultTarget.innerHTML = 'No such place in the world, try again'
  } else {
    resultTarget.innerHTML = 'Something went wrong, sorry'
    console.log(xhr.status + ' ' + xhr.statusText);
  }
};