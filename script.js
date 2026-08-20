/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt(), Ja/Nein-Frage mit confirm()

*/

const generatedNumber = Math.floor(Math.random() * 100 + 1);

console.log(generatedNumber);

while (true) {
  const inputString = prompt("Guess a number between 1 and 100");
  if (inputString === null) {
    break;
  }
  const inputNumber = parseInt(inputString);

  if (inputNumber > generatedNumber) {
    alert("The searched number is smaller.");
  } else if (inputNumber < generatedNumber) {
    alert("The searched number is bigger.");
  } else if (inputNumber === generatedNumber) {
    alert("You found the correct number.");
    break;
  } else {
    alert("Your input was not a valid number.");
  }
}
