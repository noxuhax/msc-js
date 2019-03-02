console.log("it works!");

const image = document.querySelector('.picture-block');
let answer = parseInt(prompt("Ваш возраст"));

(answer >= 18) ?
  userImage = "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
  :
  userImage = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80";

image.style.backgroundImage = "url('"+userImage+"')";