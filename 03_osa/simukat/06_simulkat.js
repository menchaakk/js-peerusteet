/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

let count = 0;
let sum = 0;
let bool;
while (bool !== false) {
  let number = Number(prompt("Syötä numero:"));
  if (isNaN(number)) {
    alert("NUMERRRROOOO!");
  } else {
    bool = confirm(`Haluatko jatkaa numeroiden antamista? (k/e)`);
    count++;
    console.log(number);
    sum += number;
    console.log("Summa:", sum);
    let mean = sum / count;
    console.log("keskivaro:", mean);
  }
}
