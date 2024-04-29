// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
//Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
//Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

let k = Number(prompt("Kuinka paljon numeroa?"));
let numbers = [];

while (0 < k) {
  let li = Number(prompt("syötä numero:"));
  if (isNaN(li)) {
    k++;
    alert("NUMERRRRROOOO!!!!");
  } else {
    numbers.push(li);
    k--;
  }
}
console.log("Pienin annettu luku on:", Math.min(...numbers));
console.log("Isoin annettu luku on:", Math.max(...numbers));
