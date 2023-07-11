// Ex1 Consigue el valor "Volvo" del array de cars y muestralo por consola.

const cars = ["Saab", "Volvo", "BMW"];


// Ex2 Cambia el primer elemento de cars a "Ford"

cars[0] = "Ford"

//Ex 3 Muestra el numero de elementos en el array usando la propiedad correcta de Array.




//-------------------------------------------------------------------------------------------------------------------------------------------------


//Ex 4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters1.push("Morty", "Summer");

console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length-1]);








//Ex 5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters2.pop()
console.log( rickAndMortyCharacters2[0], rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]);









//Ex 6  Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters3.splice(1,1)


console.log(rickAndMortyCharacters3);

console.log(rickAndMortyCharacters1.concat(rickAndMortyCharacters2.concat(rickAndMortyCharacters3)))

console.log(rickAndMortyCharacters1.join(" vive con que "))