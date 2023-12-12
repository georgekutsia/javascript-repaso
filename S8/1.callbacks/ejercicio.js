//Ej 1
const numbersList = [];

function sum(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function father(a, b, func) {
  const result =  func(a, b);
  numbersList.push(result)
}

father(4, 7, substract)

console.log(numbersList)



//Ex2 

const userAnwsers = [];

function confirmExample(description) {
  confirm();
}

function promptExample() {
  propmt();
}

function father() {}


