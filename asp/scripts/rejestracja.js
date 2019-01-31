var helpArray = ["Wprowadź swoje imię",
    "Wprowadź swoje nazwisko",
    "Wprowadź swój miesiąc urodzin",
    "Wprowadź swój rok urodzin",
    "Wprowadź swój e-mail",
    "Wprowadź swój numer telefonu",
    "Ten przycisk zatwierdza wprowadzone dane",
    "Ten przycisk resetuje wprowadzone dane", ""];


var helpText;

function init() {
    helpText = document.getElementById("helpText");

    registerListeners(document.getElementById("name"), 0);
    registerListeners(document.getElementById("surname"), 1);
    registerListeners(document.getElementById("month"), 2);
    registerListeners(document.getElementById("year"), 3);
    registerListeners(document.getElementById("email"), 4);
    registerListeners(document.getElementById("phone"), 5);
    registerListeners(document.getElementById("submit"), 6);
    registerListeners(document.getElementById("reset"), 7);


    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function () {
        return confirm("Czy na pewno chcesz zatwierdzić rejestracje?");
    }, false);

    myForm.addEventListener("reset", function () {
        return confirm("Czy na pewno chcesz zresetować wprowadzone dane?");
    }, false);
}

function registerListeners(object, messageNumber) {
    object.addEventListener("focus", function () { helpText.innerHTML = helpArray[messageNumber]; }, false);
    object.addEventListener("blur", function () { helpText.innerHTML = helpArray[8]; }, false);

}

window.addEventListener("load", init, false);