
var devfest = require("./data/devfest-2015.js");

//listerTousLesPresentateurs() : retourne le tableau de tous les présentateurs;
function listerTousLesPresentateurs() {

    return devfest.speakers;
    
}
//listerToutesLesSessions() : retourne le tableau de toutes les sessions;
function listerToutesLesSessions(){
    return devfest.sessions;
}

//trouverUneSession(idSession) : retourne la session dont l’identifiant est fourni;
function trouverUneSession(idSession){
    return listerToutesLesSessions().filter(function(session){
        return session.id===idSession;
    });
}

//listerTopPresentateurs() : retourne uniquement les présentateurs qui ont la propriététopspeaker à true.
function listerTopPresentateurs(){
  return  listerTousLesPresentateurs().filter(function(presentateur){
            return presentateur.topspeaker==true;
    });
}


exports.listePresentateur = {presentateur :listerTousLesPresentateurs};
exports.listeSession = {session :listerToutesLesSessions};
exports.listeTopPresentateur = {topPresentateur :listerTopPresentateurs};
exports.sessionId = {session :trouverUneSession};


//console.log(listerTousLesPresentateurs()); //Good
//console.log(listerToutesLesSessions());   //Good
//console.log(trouverUneSession('s100'));   //Good
//console.log(listerTopPresentateurs());    //Good

