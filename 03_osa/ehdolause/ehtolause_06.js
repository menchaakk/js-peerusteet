/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

function greaterNum(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "yhtä";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
console.log(greaterNum(25, 25));
