/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */
function getAnswer() {
  const answers = [
    "On varmaa.",
    "Kyllä, ehdottomasti.",
    "Luultavasti",
    "En ole varma",
    "kysy uudelleen.",
    "Älä laske siihen.",
    "Parempi on, ettet kerro.",
    "Ei missään nimessä.",
  ];
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}
const userQuestion = prompt("Kysy kysymys:");

if (userQuestion !== null && userQuestion.trim() !== "") {
  const answer = getAnswer();
  alert(answer);
} else {
  alert("ei kysy kysymys");
}
