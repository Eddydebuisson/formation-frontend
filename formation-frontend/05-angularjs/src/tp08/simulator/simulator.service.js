export default class SimulatorService {
   
    constructor(RaceService,$interval){
        this.raceService = RaceService;
        this.walkers = this.raceService.list();
         $interval(() => this.start(), 1000)
    }

    start() {
        //this.raceService.update('Paul',10)
        this.walkers().forEach( w => this.raceService.update(w.name,this.RaceService.update(w.name, Math.floor(Math.random() * (max-min)) + min) )

        )


}
}