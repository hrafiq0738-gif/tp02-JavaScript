let paires = [ [0,""], [0,"0"], [0,false], ["",false], [null,undefined], [null,false], [NaN,NaN], [1,"1"], [" \t\n ",0]];

let compteur = 0; // Compteur pour les paires égales avec == mais pas avec ===

//Boucle pour traverser les paires et vérifier les égalités
for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0]; // Premier élément de la paire
    let b = paires[i][1]; // Deuxième élément de la paire

    //Convertir une valeur en texte JSON lisible 
    let A = JSON.stringify(a);
    let B = JSON.stringify(b); 
    
    //Aligner du texte à gauche
    let ligne = A + "==" + B;
    ligne = ligne.padEnd(20) + "-> " + (a==b) + "   |   " ;
    ligne += A + "===" + B;
    ligne = ligne.padEnd(50) + "-> " + (a===b);

    //Affichage
    console.log(ligne);

    //tester si les éléments sont égaux avec == mais pas avec ===
    if (a == b && a !== b) {
        compteur++;
    }
        
}
console.log("--------------------------------------------------------");
console.log("Nombre de paires égales avec == mais pas avec === : " + compteur);
