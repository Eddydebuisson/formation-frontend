function Personne(nom,prenom,speudo,speudo){
    this.nom = nom;
    this.prenom = prenom;
    this.speudo =speudo;

    this.getNomComplet = function(){return this.nom +" "+ this.prenom};

}


var jules = new Personne("LEMAIRE",'jules','jules77');

var paul = new Personne("LEMAIRE","paul","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.speudo);
jules.getNomComplet();

