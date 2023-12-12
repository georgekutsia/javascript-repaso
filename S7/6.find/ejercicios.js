

console.log("Ejercicio 1")
const numbers = [32, 21, 63, 95, 100, 67, 43];

const theNumber = numbers.find(function(data){
  return data === 100
})
console.log(theNumber)









console.log("Ejercicio 2");

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie = movies.find(function(year){
  return year.date === 2010
})
console.log(movie)









const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];


console.log("Ejercicio 3");

const mutant = aliens.filter(function(alien){
  return alien.name.toLocaleLowerCase() === "cucushumushu"
})
const mutation = mutations.filter(function(mut){
  return mut.name.toLocaleLowerCase() === "porompompero"
})

mutant.mutation = mutation
console.log(mutant)

