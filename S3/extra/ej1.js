const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];


const ul$$ = document.createElement("ul")

for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    const li$$ = document.createElement("li");
    li$$.textContent = element
    ul$$.appendChild(li$$);
}

console.log(ul$$)