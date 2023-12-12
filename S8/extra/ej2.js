
let diary = []
let sorted = []
fetch("http://localhost:4000/diary")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const sorte = myJson.sort((a, b) => new Date(a.date) - new Date(b.date)); 
    drawDiary(sorte)
  })


  
  const drawDiary = (bulala) => {
    for (const page of bulala) {
      const block$$ = document.createElement("div")
      document.body.appendChild(block$$);
      block$$.innerHTML = `
      <h3>${page.title}</h3>
      <h5>${page.date}</h5>
      <p>${page.description}</p>
      `;
    }
}