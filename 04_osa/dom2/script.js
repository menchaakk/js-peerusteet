/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

const button = document.querySelector("#addFruitBtn");

const addToList = () => {
  const fruitInput = document.querySelector("#fruitInput").value;
  const fruitList = document.querySelector("#fruitList");

  if (fruitInput !== "") {
    const li = document.createElement("li");
    li.textContent = fruitInput;
    fruitList.appendChild(li);
    console.log(fruitInput);
  } else {
    alert("lisää hedelmän nimi, kiitos");
  }
};
button.addEventListener("click", addToList);
