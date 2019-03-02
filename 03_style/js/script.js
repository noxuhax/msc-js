console.log("it works!");

const coloredElement = document.querySelector(".colored");

console.log(coloredElement);

console.log(coloredElement.style);

let userHex = prompt("new color hex:");

// coloredElement.style.backgroundColor = "#CF0";
coloredElement.style["background-color"] = userHex;
