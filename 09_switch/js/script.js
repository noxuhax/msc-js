console.log("it works!");

let answer = prompt("Band name");
answer = answer.toLowerCase();

switch (answer) {
  case 'dr. dre':
    console.log('rap');
    break;
  case 'hendrix':
    console.log('rock');
    break;
  case 'spears':
    console.log('pop');
    break;
  default:
    console.log('unknown genre');
    break;
}