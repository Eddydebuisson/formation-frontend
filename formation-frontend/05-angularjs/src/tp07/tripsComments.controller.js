export default class CommentController {
    constructor(TripsService,StepsService,CommentsService){
        this.tripsService = TripsService;
        this.trips = this.tripsService.findAll()
        this.stepsService = StepsService;
        this.commentsService = CommentsService;
    }
commentId(id){
    return this.commentsService.findByTripId(id);
}


stepId(id){
   return this.stepsService.findStepsByTripId(id)
    
}

save(id,comment){
    this.commentsService.addComment(id,comment).then(r => this.jaiChange())
}


jaiChange() {
    this.steps = this.stepId(this.id)
    this.comments = this.commentId(this.id)
}

}