// Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

// const exams = [
//     {name: 'Abel Cabeza Román', score: 5}, 
//     {name: 'Maria Aranda Jimenez', score: 1}, 
//     {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
//     {name: 'Mercedez Regrera Brito', score: 7},
//     {name: 'Pamela Anderson', score: 3},
//     {name: 'Enrique Perez Lijó', score: 6},
//     {name: 'Pedro Benitez Pacheco', score: 8},
//     {name: 'Ayumi Hamasaki', score: 4},
//     {name: 'Robert Kiyosaki', score: 2},
//     {name: 'Keanu Reeves', score: 10}
// ];

// const totalScore = exams.reduce(function(acc, ex){
//   return acc + ex.score
// }, 0)

// console.log(totalScore)



// const exams = [
//   { name: "Abel Cabeza Román", score: 5 },
//   { name: "Maria Aranda Jimenez", score: 1 },
//   { name: "Cristóbal Martínez Lorenzo", score: 6 },
//   { name: "Mercedez Regrera Brito", score: 7 },
//   { name: "Pamela Anderson", score: 3 },
//   { name: "Enrique Perez Lijó", score: 6 },
//   { name: "Pedro Benitez Pacheco", score: 8 },
//   { name: "Ayumi Hamasaki", score: 4 },
//   { name: "Robert Kiyosaki", score: 2 },
//   { name: "Keanu Reeves", score: 10 },
// ];

// const totalScore = exams.reduce(function(acc, ex){
//   if(ex.score >= 5){
//     return acc + ex.score
//   } else{
//     return acc
//   }
// }, 0)
// console.log(totalScore)







const exams = [
  { name: "Abel Cabeza Román", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const totalScore = exams.reduce(function(acc, ex){
    return acc + ex.score 
}, 0)

console.log(totalScore / exams.length)