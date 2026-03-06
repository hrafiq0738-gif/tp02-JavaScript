let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

//Calcul de sous-total
let sousTotal = prix * quantite;

//Appliquer la réduction
let montantReduction = (codePromo ?? null) !== null && estMembre ? sousTotal * (reductionPourcentage / 100) : 0; //Si codePromo n'est pas null et que estMembre est true, alors on calcule la réduction, sinon la réduction est de 0.

//Calcul de total
let total = sousTotal - montantReduction;

//Vérifier si le soleCompte est suffisant
let statutPaiement = soldeCompte >= total ? "Paiement accepté" : "Solde insuffisant";

//Calculer le nouveau solde après achat si le paiement est accepté
let nouvauSolde = 0;
if (soldeCompte >= total) {
    nouvauSolde = soldeCompte - total; }

//Affichage Final
console.log("=======RECAPULTATIF=======");
console.log("Produit ".padEnd(15)+ ": " + nomProduit);
console.log("Quantité ".padEnd(15)+ ": " + quantite);
console.log("Prix unit. ".padEnd(15)+ ": " + prix.toFixed(2) + " MAD");
console.log("Sous-total ".padEnd(15)+ ": " + sousTotal.toFixed(2) + " MAD");
console.log("Réduction ".padEnd(15)+ ": " + (montantReduction ? montantReduction.toFixed(2) + " MAD" : "0 MAD"));
console.log("Total ".padEnd(15)+ ": " + total.toFixed(2) + " MAD");
console.log("Satatut".padEnd(15)+ ": " + (soldeCompte >= total ? "Paiement accepté" : "Solde insuffisant"));
console.log("Solde".padEnd(15)+ ": " + (soldeCompte >= total ? nouvauSolde.toFixed(2) + " MAD" : soldeCompte.toFixed(2) + " MAD"));
console.log("==========================");
