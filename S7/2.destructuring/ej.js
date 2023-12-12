// 1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const { title, gender, year } = game;

console.log( year, gender, title, year)

//2

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

//3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const {name, race} = animalFunction()

console.log(name, race)

//4

const car = { nombre: "Mazda 6", itv: [2015, 2011, 2020] };
const {nombre, itv} = car;
const [y1, y2, y3 ] = itv;
console.log(nombre, y1, y2, y3)


// // Ex 1
// const game = {
//   title: "The last us 2",
//   gender: ["action", "zombie", "survival"],
//   year: 2020,
// };


// const {title, gender, year} = game



// // Ex 2
// const fruits = ["Banana", "Strawberry", "Orange"];

// const [banana, strawberry, orange] = fruits



// // Ex 3

// const animalFunction = () => {
//   return { name: "Bengal Tiger", race: "Tiger" };
// };


// // const {name, race} = animalFunction


// // Ex 4
// const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

// const{name, itv} = car

// const [año1, año2, año3] = itv

// console.log(name,itv, año1, año2, año3)