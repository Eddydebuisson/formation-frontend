var ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

ville.forEach(function(element){
    console.log(element);
});

var lettreAdansToutesLesVilles = ville.every(function(element){
   return element.includes('a');
});

console.log('lettreAdansToutesLesVilles',lettreAdansToutesLesVilles);

var auMoinsUneVilleAvecUnTiret = ville.some(function(element){
   return element.includes('-');
});

console.log('auMoinsUneVilleAvecUnTiret',auMoinsUneVilleAvecUnTiret);

var villesSansTiretSansEspace = ville.filter(function(element){
   return !element.includes('-') && !element.includes(' ') ;
});

console.log('villesSansTiretSansEspace',villesSansTiretSansEspace);


var villesMajusculeSeTerminantParS = ville.filter(function(element){
   return element.endsWith('s');
}).map(function(element){
   return element.toLocaleUpperCase();
});

console.log(villesMajusculeSeTerminantParS);