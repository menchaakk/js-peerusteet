// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
//jos käyttäjä antaa muun kuin numeron, tee ______

let count = 0;
for (let i = 0; i < 20; i++) {
  let syote = Number(prompt("syötä numero " + (i + 1) + ":"));
  console.log("syöte on:", syote);
  if (syote == NaN) {
    i--;
  }
  if (syote % 2 === 0) {
    count++;
  }
}
console.log("parillisten määrä:", count);
