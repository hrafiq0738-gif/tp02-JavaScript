let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for(let i = 0; i < nombres.length; i++) {
    let n = nombres[i];
    
    if (Number.isNaN(n)) { //Vérifie si la valeur est NaN (Not a Number). On utilise Number.isNaN plutôt que isNaN car cette dernière convertit d'abord la valeur en nombre, ce qui peut donner de faux positifs.
        console.log(n + " -> INVALIDE");
    }
    else if (n === Infinity || n === -Infinity) { //Vérifie si le nombre est infini, positif ou négatif. 
        console.log(n + " -> INFINI");
    }
    else if (1 / n === -Infinity) { //C'est l'astuce pour détecter le zéro négatif (-0). En JavaScript, -0 === 0 retourne true, donc on ne peut pas les distinguer avec ===. Mais 1 / -0 donne -Infinity, tandis que 1 / 0 donne +Infinity.
        console.log(n + " -> ZERO NEGATIF");
    }
    else if (Number.isInteger(n) && n <= Number.MAX_SAFE_INTEGER && n >= Number.MIN_SAFE_INTEGER) { //Vérifie que le nombre est un entier et qu'il est dans la plage sûre [-(2⁵³-1), 2⁵³-1]. Dans cette plage, les entiers sont représentés avec une précision exacte en virgule flottante 64 bits.
        console.log(n + " -> ENTIER SUR");
    }
    else if (Number.isInteger(n)) { //Si l'entier existe mais est en dehors des limites sûres, sa valeur peut ne plus être exacte (problème de précision flottante).
        console.log(n + " -> ENTIER HORS LIMITES");
    }
    else {
        console.log(n + " -> DECIMAL");
    }
}