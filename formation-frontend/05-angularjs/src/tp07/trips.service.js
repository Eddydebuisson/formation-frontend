export default class TripsService{

constructor(apiUrl,$resource){
    this.url = apiUrl.light;
    this.TripResource = $resource(this.url+'/:tripId', {tripId:"@id"})
}

findAll(){
        return this.trips = this.TripResource.query()
}

}

