let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    let type = v ? "truthy" : "falsy"; //les valeurs falsy sont : 0, "", null, undefined, NaN, false. Toutes les autres valeurs sont truthy.

    if (v === "") {
        v = "(chaîne vide)";
    }

    console.log(String(v) + "  ->  " + type);
}