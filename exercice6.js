let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

//Utilisation de l'opérateur de coalescence nulle (??) pour fournir une valeur par défaut si la variable est null ou undefined
console.log("nom ?? " + "Valeur par défaut   -> " + (nom ?? "Valeur par défaut")); // je met les parenthèses pour que la concaténation se fasse après l'évaluation de l'opérateur ??
console.log("age ?? " + "Valeur par défaut   -> " + (age ?? "Valeur par défaut"));
console.log("ville ?? " + "Valeur par défaut   -> " + (ville ?? "Valeur par défaut"));
console.log("score ?? " + "Valeur par défaut   -> " + (score ?? "Valeur par défaut"));
console.log("actif ?? " + "Valeur par défaut   -> " + (actif ?? "Valeur par défaut"));

console.log("\n\n nom || " + "Valeur par défaut   -> " + (nom || "Valeur par défaut")); //Retourne la première valeur si elle est truthy, sinon retourne la deuxième valeur.
console.log("age || " + "Valeur par défaut   -> " + (age || "Valeur par défaut"));
console.log("ville || " + "Valeur par défaut   -> " + (ville || "Valeur par défaut"));
console.log("score || " + "Valeur par défaut   -> " + (score || "Valeur par défaut"));
console.log("actif || " + "Valeur par défaut   -> " + (actif || "Valeur par défaut"));

//Comparaison des résultats
let resultatNullish = nom ?? "Valeur par défaut";
let resultatOr = nom || "Valeur par défaut";
console.log("\n\nnom : ?? et || ->", resultatNullish === resultatOr ? "Résultats identiques" : "Résultats différents");

resultatNullish = age ?? "Valeur par défaut";
resultatOr = age || "Valeur par défaut";
console.log("age : ?? et || ->", resultatNullish === resultatOr ? "Résultats identiques" : "Résultats différents");

resultatNullish = ville ?? "Valeur par défaut";
resultatOr = ville || "Valeur par défaut";
console.log("ville : ?? et || ->", resultatNullish === resultatOr ? "Résultats identiques" : "Résultats différents");

resultatNullish = score ?? "Valeur par défaut";
resultatOr = score || "Valeur par défaut";
console.log("score : ?? et || ->", resultatNullish === resultatOr ? "Résultats identiques" : "Résultats différents");

resultatNullish = actif ?? "Valeur par défaut";
resultatOr = actif || "Valeur par défaut";
console.log("actif : ?? et || ->", resultatNullish === resultatOr ? "Résultats identiques" : "Résultats différents");