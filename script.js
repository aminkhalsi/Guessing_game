function diff() {
    var pass = false;
    while (!pass) {
        var diffuculte = prompt("Entrez la difficulté: Facile, Moyen, Difficile");
        if (diffuculte == "Facile") {
            var randomNumber = Math.floor(Math.random() * 10) + 1;
            pass = true;
        } else if (diffuculte == "Moyen") {
            var randomNumber = Math.floor(Math.random() * 50) + 1;
            pass = true;
        } else if (diffuculte == "Difficile") {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            pass = true;
        } else {
            alert("Vous devez entrer une difficulté valide");
        }
    }
    return randomNumber;
}
var numTentatives = 0;
var randomNumber = diff();
var Validate = false;
var Valider = document.querySelector("#Valider");
Valider.addEventListener("click", () => {
    Validate = true;
    var userInput = document.querySelector("#userInput").value;
    if (userInput == "") {
        alert("Vous devez entrer un nombre");
    }
    else if (userInput == randomNumber && numTentatives < 5) {
        alert("Bravo! Vous avez trouvé le nombre magique");
    } else if (numTentatives < 5) {
        alert("Désolé, vous avez entré un mauvais nombre, vous avez " + (5 - numTentatives) + " tentatives restantes");
        numTentatives++;
    }
    else {
        alert("Désolé, vous avez épuisé toutes vos tentatives, le nombre magique était " + randomNumber);
    }
});
console.log(randomNumber);
var Rejouer = document.querySelector("#Rejouer");
Rejouer.addEventListener("click", () => {
    if (Validate == true) {
        document.querySelector("#userInput").value = "";
        randomNumber = diff();
        numTentatives = 0;
        console.log(randomNumber);
    }
    else {
        alert("Vous devez d'abord valider votre choix");
    }
});