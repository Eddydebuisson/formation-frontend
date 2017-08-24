export default class RessourceController {

    constructor($resource){
        
        this.TripResource = $resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
            'update': { method:'PUT' }
        })
        this.villes = this.TripResource.query()
        
    }

    save(ville){
        ville.$update()
    }
}
