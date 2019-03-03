let randomPower = (input) => {
  powerValue = Math.random() * (9 - 1) + 1;
  return Math.abs(input ** powerValue);
}