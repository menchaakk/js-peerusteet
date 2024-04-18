// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

let count = 0;
for (let i = 0; i < 20; i++) {
  let numeroo = Number(prompt("Kirjoitin numero " + (i + 1) + ":"));

  if (numeroo % 2 === 0) {
    count++;
  }
}
console.log("parillisia lukuja:", count);
