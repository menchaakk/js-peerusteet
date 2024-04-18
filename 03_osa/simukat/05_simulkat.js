// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

let sum = 0;
let number;
let i = 1;
while (number !== 0) {
  number = Number(
    prompt("Jos haluat poistua, kirjoita 0. Kirjoita numero " + i)
  );
  i++;
  sum += number;
}
let mean = sum / (i - 2);
console.log("Keskiarvo:", mean);
