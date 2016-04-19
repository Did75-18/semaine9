var liste = document.getElementById("liste");
var supprimer = document.getElementById("supprimer");
var restaurer = document.getElementById("restaurer");

function selectionne(e) {
    e.target.classList.toggle("selected");
}

function enleve() {
    for (i = 0; i < liste.children.length; i++) {
        if (liste.children[i].classList.contains("selected")) {
            liste.children[i].classList.add("vider");
        }
    }
}

function rajoute() {
    for (i = 0; i < liste.children.length; i++) {
        liste.children[i].classList.remove("vider");
    }
}

liste.onclick = selectionne;
supprimer.onclick = enleve;
restaurer.onclick = rajoute;