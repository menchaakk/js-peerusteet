/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 59;
let name = "iii";
let isStudent = false;
let schoolInfo = { schoolName: "BC", grage: 15 };

console.log("age", age);
console.log("name", name);
console.log("isStudent", isStudent);
console.log("schoolInfo", schoolInfo);

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof schoolInfo);

/*

let hobbies = ["sählly, pesäpällo koris"];
let info = { schoolName: "BC", grage: 15 };

console.log("info:", info);
console.log("hobbies", hobbies);

console.log("hobbies typpi: ", typeof hobbies);
console.log("info tyyppi", typeof info);
*/
