

export default class CarrouselCtrl {

    constructor($interval) {
        $interval(() => this.next(), 1000)
    }
    $onInit() {
        this.images = [
            { 'name': 'New York', 'url': 'img/nyc.jpg' },
            { 'name': 'Paris', 'url': 'img/paris.jpg' },
            { 'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg' },
            { 'name': 'Rome', 'url': 'img/rome.jpg' },
            { 'name': 'Tokyo', 'url': 'img/tokyo.jpg' }
        ];

        this.currentId = 0;
    }
    next() {
        if (this.currentId < 4) {
            this.currentId = this.currentId + 1;
        } else { this.currentId = 0; }
    }

    previous() {
        if (this.currentId > 0) {
            this.currentId = this.currentId - 1;
        } else {
            this.currentId = 4;
        }
    }


}