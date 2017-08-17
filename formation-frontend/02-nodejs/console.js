const readline = require('readline');

var service = require('./service.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
    prompt: "*** Application Conférence *** \n 1. Liste de tous les présentateurs \n 2. Top présentateurs \n 3. Liste des sessions \n 4. Détail d'une session \n"
});


rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case '1':
      console.log(service.listePresentateur.presentateur().map(function(presentateur){
          return presentateur.firstname+" "+presentateur.lastname;
      }));
      break;
    case '3':
      console.log(service.listeSession.session().map(function(session){
          return session.title;
      }));
      break;
    case '4':
    rl.question("Veuillez saisir l'id de la session ", (answer) => {
        
        console.log(service.sessionId.session(answer));
        });
        rl.prompt();
      break;
    case '2':
      console.log(service.listeTopPresentateur.topPresentateur().map(function(presentateur){
          return presentateur.firstname+" "+presentateur.lastname;
      }));
      break;    
    default:
      console.log('Mauvais choix !');
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log("Merci d'avoir utilisée nos service !");
  process.exit(0);
});