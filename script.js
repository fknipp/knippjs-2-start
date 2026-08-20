/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt(), Ja/Nein-Frage mit confirm()

*/

const generatedNumber = Math.floor(Math.random() * 100 + 1);
console.log(generatedNumber);

$("#form").on("submit", (e) => {
  e.preventDefault();
  console.log(e);

  const inputString = $("#form input").val();
  const inputNumber = parseInt(inputString);

  if (inputNumber > generatedNumber) {
    $(".output").text("The searched number is smaller.");
  } else if (inputNumber < generatedNumber) {
    $(".output").text("The searched number is bigger.");
  } else if (inputNumber === generatedNumber) {
    $(".output").text("You found the correct number.");
  } else {
    $(".output").text("Your input was not a valid number.");
  }

  $("#form input").focus();
});