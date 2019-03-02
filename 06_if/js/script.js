console.log("it works!");

const image = document.querySelector('.picture-block');
let answer = parseInt(prompt("Ваш возраст"));

if (answer < 18) {
  var userImage = "https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80";
} else if (answer <= 25) {
  var userImage = "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80";
} else if (answer <= 50) {
  var userImage = "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80";
} else {
  var userImage = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80";
}

image.style.backgroundImage = "url('"+userImage+"')";