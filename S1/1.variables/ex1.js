// Ex1  Crea una variable llamada carName, asignale el valor Volvo a ella.
let cardName = "volvo";

// Ex2 Crea una variable llamada x, asignale el valor 50 a ella.

let number = 50

// Ex3 Crea una variable llamada x con el valor 5 y otra y con el valor 10. Crea una tercera variable z y asignale el valor de x + y.

let x = 5
let y = 10
let z = x + y

// Ex4 Dado el siguiente javascript, cambia el valor de la propiedad ``age`` a 25.

const character = { name: "Jack Sparrow", age: 10 };

//cambiar o sobreescribir
character.age = 25

//añadir
character.nickName = "captain"

// Ex5 Declara 3 variables con los nombres y valores siguientes ``firstName = 'Jon'; lastName = 'Snow'; age = 24``; Muestralos por consola de esta forma: Soy Jon Snow, Tengo 24 años y me gustan los lobos.

let firstName = "Jon";
let lastName = "Snow";
let age = 24;
let presentation = "soy" + " " + firstName + lastName + ", " + "tengo " + age + " años y me gustan los lobos"


//Ex6 Dado el siguiente javascript, imprime con un ``console.log`` la suma del precio de ambos juguetes.

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

let sumPrice = toy1.price + toy2.price

//Ex7 Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice`` a 25000 y actualiza la propiedad ``finalPrice`` de todos los coches con el valor de su propiedad ``basePrice`` más el valor de la variable ``globalBasePrice``.

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000

car1.finalPrice = car1.basePrice + car1.finalPrice
car2.finalPrice = car1.basePrice + car1.finalPrice


