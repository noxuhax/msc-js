console.log("it works!");

let changeText = (element, text) => {
  text = text.toUpperCase();
  element.innerHTML = text;
}

changeText(document.body, 'ololo');