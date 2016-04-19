
var liste = document.getElementById("liste");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var numero = document.getElementById("numero");
var ajouter = document.getElementById("ajouter");
var annuler = document.getElementById('annuler');
var recherche = document.getElementById("recherche");
var rechercher = document.getElementById("rechercher");
var resultats = document.getElementById("resultats");

var contacts = [{
        prenom : 'Jean',
        nom : 'Valjean',
        numero : '00 00 00 00 01'
    },
    {
        prenom : 'Maurice',
        nom : 'Chevalier',
        numero : '00 00 00 00 02'
    },
    {
        prenom : 'Roger',
        nom : 'Rabbit',
        numero : '00 00 00 00 03'
    }];;

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.numero + ")";
};
alert(texteContact(contacts[2]));



function afficherListe() {
    detailListe = "";
    for (var i = 0; i < contacts.length; i++) {
        detailListe += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    liste.innerHTML = detailListe;
};


function ajoutContact() {
    contacts.push({
        prenom: prenom.value,
        nom: nom.value,
        numero: numero.value
    });
    afficherListe();
};

function enleverContact() {
    if(contacts.length>3){ // laisse les 3 contacts de base
     contacts.pop({
        prenom: prenom.value,
        nom: nom.value,
        numero: numero.value
    });
 }
   
    afficherListe();
};

function rechercherContact() {
    trouve = recherche.value;
    trouveContact = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == trouve || contacts[i].nom == trouve || contacts[i].numero == trouve) {
            trouveContact += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    resultats.innerHTML = trouveContact;
}

ajouter.onclick = ajoutContact;
annuler.onclick = enleverContact;
rechercher.onclick = rechercherContact;

afficherListe();