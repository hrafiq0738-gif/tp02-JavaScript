# Résultats des exercices JavaScript

Exercice 1:
  42 -> number
  Bonjour -> string        
  true -> boolean
  null -> object
  undefined -> undefined
  1,2,3 -> object
  [object Object] -> object
  NaN -> number


Exercice 2 :
  0  ->  falsy
  1  ->  truthy
  (chaîne vide)  ->  falsy
  0  ->  truthy
  null  ->  falsy
  undefined  ->  falsy
  NaN  ->  falsy
  false  ->  falsy
    ->  truthy
  [object Object]  ->  truthy


Exercice 3 :
  r1 = 30 (number)
  r2 = 1020 (string)  
  r3 = 1020 (string)  
  r4 = 1020 (string)  
  r5 = 7 (number)     
  r6 = 7 (number)     
  r7 = 10 (number)    
  r8 = 10null (string)
  r9 = NaN (number)   
  r10 = 2(number)


Exercice 4 :
  0==""               -> true   |   0===""          -> false
  0=="0"              -> true   |   0==="0"         -> false
  0==false            -> true   |   0===false       -> false
  ""==false           -> true   |   ""===false      -> false
  null==undefined     -> true   |   null===undefined-> false
  null==false         -> false   |   null===false   -> false
  null==null          -> false   |   null===null    -> false
  1=="1"              -> true   |   1==="1"         -> false
  " \t\n "==0         -> true   |   " \t\n "===0    -> false
  --------------------------------------------------------  
  Nombre de paires égales avec == mais pas avec === : 7


Exercice 5 :
  0 -> ENTIER SUR
  NaN -> INVALIDE
  Infinity -> INFINI
  -Infinity -> INFINI
  42 -> ENTIER SUR
  3.14 -> DECIMAL
  9007199254740992 -> ENTIER HORS LIMITES
  0 -> ZERO NEGATIF


Exercice 6 :
  nom ?? Valeur par défaut   -> Valeur par défaut
  age ?? Valeur par défaut   -> 0
  ville ?? Valeur par défaut   ->
  score ?? Valeur par défaut   -> Valeur par défaut
  actif ?? Valeur par défaut   -> false
  
  
  nom || Valeur par défaut   -> Valeur par défaut
  age || Valeur par défaut   -> Valeur par défaut
  ville || Valeur par défaut   -> Valeur par défaut
  score || Valeur par défaut   -> Valeur par défaut
  actif || Valeur par défaut   -> Valeur par défaut
  
  
  nom : ?? et || -> Résultats identiques
  age : ?? et || -> Résultats différents
  ville : ?? et || -> Résultats différents
  score : ?? et || -> Résultats identiques
  actif : ?? et || -> Résultats différents


Exercice 7 :
  =======RÉCAPULTATIF=======
  Produit        : Clavier mécanique
  Quantité       : 3
  Prix unit.     : 89.99 MAD
  Sous-total     : 269.97 MAD
  Réduction      : 0 MAD
  Total          : 269.97 MAD
  Statut         : Solde insuffisant
  Solde          : 250.00 MAD
  ==========================


Exercice 8 :
  ===== RAPPORT UTILISATEUR =====
  nom                 : "Fatima"  (corrigé : espaces supprimés)
  age                 : 23 (valide)
  email               : "fatima@example" (Invalide : pas de point après @)
  scoreJeu            : 150 (extrait depuis "150pts")
  estAdmin            : false (attention : Boolean("false") = true, conversion manuelle requise)
  derniereConnexion   : "Jamais connecté" (valeur par défaut via ??)
  nombreConnexions    : "Aucune connexion" (0 après conversion)
  ===============================
