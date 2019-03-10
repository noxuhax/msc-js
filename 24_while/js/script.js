console.log("it works!");

const items = document.getElementsByTagName('li');
console.log(items);

let counter = 0;

while (counter < items.length) {
  items[counter].innerHTML = 'Item #' + (counter + 1);
  counter++;
}