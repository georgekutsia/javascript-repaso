//Ex 1
// fetch("https://api.agify.io?name=michsael")
// .then((response) =>response.json())
// .then((res) => console.log(res))

//Ex 2 a
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");
const body$$ = document.querySelector("body");
const baseUrl = "https://api.nationalize.io?name=";

const checkInput = () => {
  fetch(`https://api.nationalize.io?name=${input$$.value}`)
    .then((resp) => resp.json())
    .then((res) => {
      const pp$$ = document.createElement("p");
      const exterminate$$ = document.createElement("button");
      pp$$.innerText = `El nombre ${input$$.value} tiene: `;
      body$$.appendChild(pp$$);
      console.log(res);
      for (const count of res.country) {
        let div$$ = document.createElement("div");
        div$$.innerHTML = `
            <div>
    <h2>${count.probability} de ser de ${count.country_id}</h2>
    </div>
        
        `;
        pp$$.appendChild(div$$);
      }
      exterminate$$.innerText = "Delete";
      body$$.appendChild(exterminate$$);
      exterminate$$.addEventListener("click", () => exterminate(pp$$));
      input$$.value = "";
    });
};

const exterminate = (aRemover) => {
  aRemover.remove();
};
button$$.addEventListener("click", () => checkInput());

//Ex 2 b
