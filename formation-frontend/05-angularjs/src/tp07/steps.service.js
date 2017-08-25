export default class StepsService{

    constructor(apiUrl,$resource) {
        this.url = apiUrl.full;
        this.tripResource = $resource(this.url+'/:tripId', {tripId:"@id"}, {
             charge: {method:'GET', isArray:true}
             });
    }

    findStepsByTripId(id){
        console.log(this.tripResource.get({tripId: id}) )
        return  this.tripResource.get({tripId: id})
        

    }

}