
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const newStreamers = streamers.filter(function(data){
  const lolPlayers = data.gameMorePlayed.includes("Legends")
    if (lolPlayers && data.age > 35) {
      data.gameMorePlayed = data.gameMorePlayed.toUpperCase();
    }
    return lolPlayers
})
console.log(newStreamers)