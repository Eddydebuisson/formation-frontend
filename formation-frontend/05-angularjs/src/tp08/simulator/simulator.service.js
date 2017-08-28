export default class SimulatorService {

    constructor(RaceService, $interval) {
        this.raceService = RaceService;
        this.walkers = this.raceService.list();
        this.$interval = $interval;

    }

    start() {
        let run = this.$interval(() => {
            let max = 30;
            let min = 0;

            this.walkers.forEach(w => this.raceService.update(w.name, Math.floor(Math.random() * (max - min)) + min));
            if (this.walkers.find(w => w.progress >= 100)) {
                this.$interval.cancel(run);
            }
        }, 1000)
    }

}