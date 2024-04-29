/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi
 "Hei, maailma!".
*/
const changeText = () => {
  document.getElementById("content").textContent = "Hei,maailma";
};
