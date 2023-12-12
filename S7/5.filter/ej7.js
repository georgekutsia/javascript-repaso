const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];


const elInput$$ = document.querySelector('[data-function="toFilterStreamers"]');

function verValor(event) {
  console.log(event.target.value);
}

const filteredStreamers = steamers.filter(function(data){
      return data.name.includes(`${data.target.value}`)
})


elInput$$.addEventListener("input", verValor);
