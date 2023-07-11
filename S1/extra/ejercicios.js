// console.log("ejercicio 1")

// const users = [
//   { name: "Abel", years: 43 },
//   { name: "Maria", years: 18 },
//   { name: "Pedro", years: 14 },
//   { name: "Samantha", years: 32 },
//   { name: "Raquel", years: 16 },
// ];

// for (let i = 0; i < users.length; i++) {
//   if(users[i].years <= 17){
//     console.log("usuario menor de edad" + " "+ users[i].name)
//   } else{
//     console.log("usuario mayor de edad" + " " + users[i].name);

//   }
// }

// console.log("ejercicio 2");

// const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
// const foodSchedule = [
//   { name: "Salad", isVegan: true },
//   { name: "Salmon", isVegan: false },
//   { name: "Tofu", isVegan: true },
//   { name: "Burger", isVegan: false },
//   { name: "Rice", isVegan: true },
//   { name: "Pasta", isVegan: true },
// ];
// let newFruit = 0;
// for (let i = 0; i < foodSchedule.length; i++) {
//       let newList = foodSchedule[i]
//       if(!newList.isVegan){
//         newList.name = fruits[newFruit]
//         newList.isVegan = true
//         newFruit++
//       }
//       console.log(newList)
// }

// console.log("ejercicio 3");

// const movies = [
//   { name: "Your Name", durationInMinutes: 130 },
//   { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
//   { name: "Origen", durationInMinutes: 165 },
//   { name: "El señor de los anillos", durationInMinutes: 967 },
//   { name: "Solo en casa", durationInMinutes: 214 },
//   { name: "El jardin de las palabras", durationInMinutes: 40 },
// ];

// let peliculaPequeña = [];
// let peliculaMediana = [];
// let peliculaGrande = [];

// for (let i = 0; i < movies.length; i++) {
//   mov = movies[i]
//   // console.log(mov)
//   if(mov.durationInMinutes <=100){
//     // peliculaPequeña = mov
//     peliculaPequeña.push(mov);
//   } else if ( mov.durationInMinutes >100 && mov.durationInMinutes <200){
//     // peliculaMediana = mov
//     peliculaMediana.push(mov);
//   } else{
//     // peliculaGrande = mov
//     peliculaGrande.push(mov)
//   }
// }
//     console.log("pequeña", peliculaPequeña);
//     console.log("mediana", peliculaMediana);
//     console.log("grande", peliculaGrande);

// console.log("ejercicio 4");

// const products = [
//   { name: "Gorra de rodilla", sellCount: 10 },
//   { name: "Pantalón de pana", sellCount: 302 },
//   { name: "Reloj de papel albal", sellCount: 23 },
//   { name: "Inpar de zapatos", sellCount: 6 },
// ];

// let totalSum =0
// for (let i = 0; i < products.length; i++) {
//   totalSum += products[i].sellCount;
// }
// console.log(totalSum)

// console.log("ejercicio 5");

// const products = [
//   { name: "Gorra de rodilla", sellCount: 10 },
//   { name: "Pantalón de pana", sellCount: 302 },
//   { name: "Reloj de papel albal", sellCount: 23 },
//   { name: "Inpar de zapatos", sellCount: 6 },
// ];


// let totalSum = 0
// let media = 0
// for (let i = 0; i < products.length; i++) {
//   totalSum += products[i].sellCount;
//   media = totalSum / products.length;
// }
// console.log(media)



console.log("ejercicio 5");

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let i = 0; i < products.length; i++) {
  const newList = products[i];
  if(newList.sellCount >= 20){
    goodProducts.push(newList)
  } else{
    badProducts.push(newList)
  }
}
console.log("goodProducts", goodProducts)
console.log("badProducts", badProducts)