console.log("01 - Fonctions");
var nombre1 = 10;
var nombre2 = 20;


// additionne deux nombre
function additionner(nb1, nb2) {
    return nb1 + nb2;
}

var resultat = additionner(nombre1,nombre2);

console.log("resultat =",resultat);

//somme reference la fonction addtionner
var somme = additionner;

resultat2 = somme(nombre1,nombre2);

console.log("resultat 2 =",resultat2);

//multiplication deux nombre
function multiplication(nb1,nb2) {
    return nb1*nb2;
}

var resultat3 = multiplication(nombre1,nombre2);

console.log("resultat 3 =",resultat3);

var afficherOperation = function(nomOperation,operation,nb1,nb2){

        return nomOperation+"[ nb1 == "+nb1+" nb2 == "+nb2+"] == "+ operation(nb1,nb2);
};

console.log(afficherOperation('somme',somme,20,40));
console.log(afficherOperation('Multiplication',multiplication,10,20));
console.log(afficherOperation('Soustraction',function(nb1,nb2){return nb1-nb2},15,5));

