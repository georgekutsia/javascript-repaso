const button$$ = document.querySelector(`[data-fn="callACat"]`);

const fetching = () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      const div$$ = document.createElement("div");
      const buttonDelete$$ = document.createElement("button");
  
      // buttonDelete$$.innerText = "borrar"
      // buttonDelete$$.addEventListener("click", () => {
      //   div$$.remove();
      // });
      div$$.addEventListener("click", ()=>{
        div$$.remove()
      })
      div$$.innerHTML = `
        <img src="${data[0].url}" alt="foto" width="150px">
      `;
      // div$$.appendChild(buttonDelete$$)
      document.body.appendChild(div$$);
      console.log(data);
    })
};

button$$.addEventListener("click", () => fetching());
