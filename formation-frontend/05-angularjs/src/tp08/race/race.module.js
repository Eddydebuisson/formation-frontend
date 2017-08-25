import angular from 'angular'

import RaceController from './race.controller.js'

import RaceService from './race.service.js'

import  '../simulator/simulator.module'

const moduleRace = angular.module('raceModule', ['simulatorModule']).service("RaceService",RaceService)
                                                                    .controller(RaceController.name,RaceController)


export default moduleRace;