class CommentsService {

    constructor(apiUrl,$resource) {
        this.url = apiUrl.full;
        this.tripResource = $resource(this.url+'/:tripId', {tripId:"@id"},{
            'update': { method:'PUT' }
        })
        
    }


    findByTripId(id) {
        return this.tripResource.get({tripId:id})
       
    };

    addComment(id,comment) {
         const tripR = this.tripResource.get({tripId:id})
       
         return tripR.$promise.then(r => {
             if(!tripR.comments){
                 tripR.comments = []
             }
            tripR.comments.push({id:'anonymous' ,text: comment})
             return tripR.$update()
         })
    };

}

const comment = (apiUrl,$resource) => {
    return  new CommentsService(apiUrl,$resource)
}

export default comment;