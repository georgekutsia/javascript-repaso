console.log("ej1")
const pointsList = [32, 54, 21, 64, 75, 43]
const anotherList = [...pointsList].sort((a,b) => b-a).map((a) => (a+100))
console.log(anotherList)



console.log("ej2");
const toy = { name: "Bus lightyear", date: "20-30-1995", color: "multicolor" };

const newToy = {...toy}
console.log(newToy)

console.log("ej3");




console.log("ej4");






// //Ex 1

// const pointsList = [32, 54, 21, 64, 75, 43];

// const newList = [...pointsList]
// // console.log(newList)

// //Ex 2

// const toy = { name: "Buzz lightyear", date: "20-30-1995", color: "multicolor" };

// const newToys = {...toy}
// // console.log(newToys)


// //Ex 3
// const pointsLis2 = [54, 87, 99, 65, 32];
// const newPointsLis = [...pointsList, ...pointsLis2]
// // console.log(newPointsLis);



// //Ex 4
// const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

// const updatedToys = {...toy, ...toyUpdate}

// // console.log(updatedToys);

// //Ex 5

// const colors = ["rojo", "azul", "amarillo", "verde", "naranja"]; 

// const newColors = [...colors]
// newColors.splice(1,1)
// console.log(newColors)
