export default class RaceController{

    constructor(RaceService,SimulatorService){

            this.raceService = RaceService;
            this.simulatorService =SimulatorService;
            this.coureur = this.raceService.list();
            
    }

    start(){
        this.simulatorService.start();
    }


}