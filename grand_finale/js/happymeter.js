// window.onload = () => {

  const APIKey = '89dd95d1a1f1bc4a6d2666205b5b8b97';
  const city = 'Moscow';
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=metric';
  const personForm = document.forms[0];
  const personNamePlaceholder = document.querySelector('.personName');
  const iconPlaceholder = document.querySelector('.icon');

  class Person {
    constructor(name) {
      this.name = name;
      this.happiness = 0;
    }
    hasCat() {
      this.happiness++;
    }
    hasRest() {
      this.happiness++;
    }
    hasMoney() {
      this.happiness++;
    }
    isSunny() {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send();
      if (xhr.status == 200) {
        let DATA = JSON.parse(xhr.responseText);
        if (DATA.main.temp > 15) {
          this.happiness++;
        }
        return this.happiness;
      }
    }
  }

  personForm.onsubmit = function(e) {
    e.preventDefault();
    name = this.elements.name.value;
    this.elements.cat.value == 'yes' ? this.hasCat = true : this.hasCat = false;
    this.elements.rest.value == 'yes' ? this.hasRest = true : this.hasRest = false;
    this.elements.money.value == 'yes' ? this.hasMoney = true : this.hasMoney = false;

    newPerson = new Person(name);
    this.hasCat ? newPerson.hasCat() : '';
    this.hasRest ? newPerson.hasRest() : '';
    this.hasMoney ? newPerson.hasMoney() : '';
    newPerson.isSunny();

    switch (newPerson.happiness) {
      case 4:
        happinessIcon = '😁';
        break;
      case 1:
        happinessIcon = '☹️';
        break;
      default:
        happinessIcon = '😐';
        break;
    }

    personNamePlaceholder.innerHTML = newPerson.name;
    iconPlaceholder.innerHTML = happinessIcon;
  }


// }