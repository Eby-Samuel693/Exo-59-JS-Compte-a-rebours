let rebour = +prompt("entré un nombre");
let utilisateur = document.getElementById("temps");
if(rebour === parseInt(rebour)) {

    while (rebour > 0) {
        utilisateur.innerHTML += rebour + "<br>";
        rebour--;
    }
}
else {
    alert("entré un nombre !");
}