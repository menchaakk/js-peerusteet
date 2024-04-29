// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
// tulostaa pienimmän ja suurimman numeron.

/* VINKKI: talleta annetut luvut taulukkoon, jotta saat niistä suurimman ja pienimmän arvon 
Esimerkki taulukon määrittely ennen silmukkaa näin 
let numerot = []
taulukkoon arvojen lisääminen silmukan sisällä toimii näin
numerot += annettuArvo 
Käydään taulukot läpi osassa 5. */
let summa = 0;
let lukujenMaara = 0;
let numbers = [];

while (lukujenMaara < 10) {
  let li = Number(prompt("syötä numero:"));
  if (isNaN(li)) {
    lukujenMaara--;
    alert("NUMERRRRROOOO!!!!");
  } else {
    numbers.push(li);
    lukujenMaara++;
    summa += li;
    console.log(li);
    console.log("summa:", summa);
    console.log("Lukjen määrä nyt:", lukujenMaara);
    console.log("Pienin annettu luku on:", Math.min(...numbers));
    console.log("Isoin annettu luku on:", Math.max(...numbers));
  }
}
let keskiarvo = summa / lukujenMaara;
console.log("Lopussa lukujen keskiarvo on:", keskiarvo);
