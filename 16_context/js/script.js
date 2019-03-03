console.log(this);

const btn = document.querySelector('button');

// btn.onclick = function () {
//   console.log(this);
// };

btn.onclick = () => {
  console.log(this);
};