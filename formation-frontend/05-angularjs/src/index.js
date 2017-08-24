console.log('Bonjour App');
//import angular
import angular from 'angular'

import ngResource from 'angular-resource'

// récupération de la page HTML ./tp01/expressions.html à l'aide de Webpack
import tplTp01 from './tp01/expressions.html'

import tplTp02 from './tp02/vues.html'

import tplTp03 from './tp03/carrousel.html'

import tplTp04 from './tp04/forms.html'

import tplTp05 from './tp05/tripsList.html'

import tplTp06 from './tp06/tripsListDetails.html'

import CarrouselCtrl from './tp03/carrousel.controller'

import formController from './tp04/forms.controller.js'

import HttpController from './tp05/tripsList.controller.js'

import RessourceController from './tp06/tripsListDetails.controller.js'


import css from './tp04/forms.css'


// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = [tplTp01,tplTp02,tplTp03,tplTp04,tplTp05,tplTp06].join('<hr>')

angular.module('tripApp', ['ngResource']).controller(CarrouselCtrl.name, CarrouselCtrl).controller(formController.name, formController).controller(HttpController.name,HttpController).controller(RessourceController.name,RessourceController)