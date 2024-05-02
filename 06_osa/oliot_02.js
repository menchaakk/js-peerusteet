/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän

const kirjasto = [
  {
    otsikko: "The Metamorphosis",
    kirjailija: "Franz Kafka",
    julkaisuvuosi: 1915,
  },
  {
    otsikko: "1984",
    kirjailija: "George Orwell",
    julkaisuvuosi: 1949,
  },
];
console.log(kirjasto);
/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän
console.log(kirjasto[0].otsikko);
kirjasto[1].julkaisuvuosi = 2024;
console.log(kirjasto[1].julkaisuvuosi);
/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän
kirjasto[0].lajityypit = ["novella"];
kirjasto[1].onSaatavilla = true;
console.log(kirjasto);
/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän
function Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  this.otsikko = otsikko;
  this.kirjailija = kirjailija;
  this.julkaisuvuosi = julkaisuvuosi;
  this.lajityypit = lajityypit;
}
const book = new Kirja("Moneyball", "Michael Lewis", 2003, "non-fiction");
kirjasto.push(book);
console.log(kirjasto);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän
function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
  return {
    otsikko: otsikko,
    kirjailija: kirjailija,
    julkaisuvuosi: julkaisuvuosi,
    lajityypit: lajityypit,
  };
}
let newBook = luoKirja("The Catcher in the Rye", "J.D. Salinger", 1951, [
  "fiction",
]);
console.log(newBook);

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän
const kirjastoJson = JSON.stringify(kirjasto);
console.log(kirjastoJson);
const kirjastoObject = JSON.parse(kirjastoJson);
console.log(kirjastoObject[0].otsikko);
