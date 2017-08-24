export default class HttpController {

    constructor($http){
    this.http = $http;
    this.$http =  $http({method:'GET', url:'http://localhost:3000/trips'}).then( response => {
        this.villes = response.data
        
    }, error =>{
        console.log(error)
    })
    
}
save(ville){
    
    this.http({
        method:'PATCH', 
        url:'http://localhost:3000/trips/'+ville.id,
        data :ville})

}
}   