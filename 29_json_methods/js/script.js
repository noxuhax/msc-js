console.log("it works!");

const apiString = '[{"city": "Moscow","temp": 5,"pressure": 250},{"city": "Miami","temp": 25,"pressure": 200},{"city": "Beijing","temp": 15,"pressure": 270}]';

const dataParsed = JSON.parse(apiString);
console.log(dataParsed);

const dataStringified = JSON.stringify(dataJson);
console.log(dataStringified);