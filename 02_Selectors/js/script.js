console.log("it works!");

const byTag = document.getElementsByTagName("div");
const byClass = document.getElementsByClassName("my-class");
const byId = document.getElementById("my_id");

const allBySelector = document.querySelectorAll("div[class]");
const firstBySelector = document.querySelector("div[class]");

const question = prompt("Что хотите написать?")

console.log(byTag, byClass, byId, allBySelector, firstBySelector);

byId.innerHTML = question;