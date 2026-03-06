let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

//Supprimer les éspaces au début et à la fin du nom
let nomSansEspaces = nom.trim();
if (nomSansEspaces === "") {
    nomSansEspaces = "Inconnu"
}

//onvecrit l'age en nombre entier
let ageEntier = Number(age);
let ageStatut ;
if (Number.isNaN(ageEntier) || ageEntier <= 0) {
    ageStatut = "invalide";}
else { ageStatut = "valide"; }

//Vérifier si l'email contient un "@" et un "." après le "@"
let positionArobase = email.indexOf("@");
let positionPoint = email.indexOf(".", positionArobase + 1); //chercher la position du premier point qui se trouve après l'arobase dans l'adresse email.
let emailValide; //Vérifier si l'email est valide ou non
if (positionArobase !== -1 && positionPoint !== -1) { // -1 signifie "non trouvé"
    emailValide = "Valide";
} else {
    emailValide = "Invalide : pas de point après @" ;
}

//Extraire le nombre de points du score de jeu
let scoreExtrait = parseInt(scoreJeu);
if (Number.isNaN(scoreExtrait)) { scoreExtrait = 0; }

//Vérifier Admin
let adminStatut;
if (estAdmin.toLowerCase() === "true") {
    adminStatut = true;
} 
else { adminStatut = false; }

//Dérnière connexion
let connexionStatut = derniereConnexion ?? "Jamais connecté";

//Nombre de connexions
let nbreConnexions = Number(nombreConnexions);
let connexionsMssg;
if (nbreConnexions === 0) {
    connexionsMssg = "Aucune connexion";
} else {
    connexionsMssg = `Nombre de connexions : ${nbreConnexions}`;
}

//Affichage
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom`.padEnd(20) + `: ${JSON.stringify(nomSansEspaces)}  (corrigé : espaces supprimés)`);
console.log(`age`.padEnd(20) + `: ${ageEntier} (${ageStatut})`);
console.log(`email`.padEnd(20) + `: ${JSON.stringify(email)} (${emailValide})`);
console.log(`scoreJeu`.padEnd(20) + `: ${scoreExtrait} (extrait depuis "150pts")`);
console.log(`estAdmin`.padEnd(20) + `: ${adminStatut} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion`.padEnd(20) + `: ${JSON.stringify(connexionStatut)} (valeur par défaut via ??)`);
console.log(`nombreConnexions`.padEnd(20) + `: ${JSON.stringify(connexionsMssg)} (0 après conversion)`);
console.log(`===============================`);