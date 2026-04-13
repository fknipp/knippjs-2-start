/*

Simple Interaktion mit dem Benutzer:

Ausgabe mit alert(), Eingabe mit prompt(), Ja/Nein-Frage mit confirm()

*/

// Zahl ausdenken
const ausgedachteZahl = Math.floor(Math.random() * 100 + 1);

$("#form").on("submit", (e) => {

  e.preventDefault();

  // Frage: Überlege eine Zahl von 1 bis 100.
  // Person gibt Antwort ein
  const eingabe = $("#form input").val();

  const eingegebeneZahl = parseInt(eingabe);

  if (isNaN(eingegebeneZahl)) {
    $(".output").text("Die Eingabe ist ungültig.");
    return;
  }

  // Vergleich: eingegebene Zahl größer als die ausgedachte Zahl
  // Ausgabe: Meine Zahl ist kleiner
  if (eingegebeneZahl > ausgedachteZahl) {
    $(".output").text("Meine Zahl ist kleiner.");
  }

  // Sonst Vergleich: eingebene Zahl ist kleiner als die ausgedachte Zahl
  // Ausgabe: Meine Zahl ist größer
  else if (eingegebeneZahl < ausgedachteZahl) {
    $(".output").text("Meine Zahl ist größer.");
  }

  // Sonst Ausgabe: Du hast die Zahl erraten.
  else {
    $(".output").text("Du hast die Zahl erraten.");
  }

  // Neue Antwort eingeben (Sprung zurück, wenn die eingegebene Zahl ungleich der ausgedachten Zahl ist)
});
