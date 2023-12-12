const fetchCharacters = (ind) => {
  fetch(`http://localhost:3000/characters?_page=${ind}&_limit=5`)
  .then((res)=>  res.json())
  .then((data) => console.log(data))
}

const showCharacters = (namer, src) => {
  const div$$ = document.createElement("div")
  const gallery$$ = document.querySelector(".b-gallery")
  div$$.innerHTML = `
          <h3> ${namer}</h3>
        <img src="${src}" alt="">
  `;
}

async function init(bla){
  fetchCharacters(bla)
}

init(1)