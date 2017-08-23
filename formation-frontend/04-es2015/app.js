
/******  Exercice let  */
console.log("********************* Exercice let *******************");
let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = 'paris';
console.log(favoriteCityId);

/****** Exercice const */
console.log("******************* Exercice const *****************");
const citiesId =   ["paris", "nyc", "rome", "rio-de-janeiro"];

console.log(citiesId);

// citiesId = []; ne peux pas réafectée une const 

citiesId.push('tokyo');

console.log(citiesId);

/****** Excercice Création d'objet */
console.log("******************* Excercice Création d'objet *****************");
function GetWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20 ;
    return{city,temperature};
}

const Weather = GetWeather(favoriteCityId);

console.log(Weather);

/****** exercice Affectation destructurée */
console.log("******************* exercice Affectation destructurée *****************");
const city = Weather.city ;
const temperature = Weather.temperature ;

console.log (city);
console.log (temperature);

/******* excercice Rest operator */
console.log("******************* excercice Rest operator *****************");

const [parisId,nycId, ...othersCitiesId ] = citiesId;

console.log(parisId,nycId,othersCitiesId.length);

/****** Classe */
console.log("******************* Classe *****************");
class Trip {


constructor(id,name,imageUrl) {
this.id = id;
this.name = name;
this.imageUrl =imageUrl;

}
get price(){
return this._price;
}
set price(newPrice) {
this._price = newPrice;
}
toString() {
return "Trip ["+this.id+","+this.name+","+this.imageUrl+","+ this._price+"]" ;
}
static getDefaultTrip(){
 return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg');
}
}
let parisTrip = new Trip('paris','Paris', 'img/paris.jpg');
console.log(parisTrip,parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString())
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

/****** Excercice héritage */
console.log("******************* héritage *****************");
class FreeTrip extends Trip {

constructor(id,name,imageUrl,price) {
super(id, name,imageUrl);
this._price = price || 0;
}
toString() {
return "FreeTrip ["+this.id+","+this.name+","+this.imageUrl+","+ this._price+"]" ;
}
};

const freeTrip = new FreeTrip('nantes','Nantes','img/nanges.jpg');
console.log(freeTrip.toString());

/***** Excercice sur Promise, Set, Map, Arrow Function */
console.log("******************* Excercice sur Promise, Set, Map, Arrow Function *****************");


class TripService {
constructor() {
    this.trips = new Set([
    new Trip('paris', 'Paris', 'img/paris.jpg'),
    new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
    new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    ])
}
findByName(tripName) {
        return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            let found; 
            this.trips.forEach((t)=>{
                if (t.id === tripName) {
                    found= t;
                }else{
                    reject( "No trip with name "+tripName);
                }
            })
            resolve(found);
        }, 2000);
    });

}

}


class PriceService {
constructor() {
    this.mapper = new Map([['paris',100],['rio-de-janeiro',800],['nantes']]);
}

findPriceByTripId(tripId) {
        return new Promise( (resolve, reject) => {
        setTimeout(()=> {
                let found = this.mapper.get(tripId);
                if(found){
                    resolve(found);
                }else{
                    reject("No price for trip id "+tripId);
                }
            resolve(found);
        }, 2000);
    });

}

}



const tripService = new TripService();

const prom = tripService.findByName('paris');

prom.then(trip =>{
    console.log(trip.toString())
},(reject)=>{
    console.log(reject);
});



const priceService = new PriceService();

const promTwo = priceService.findPriceByTripId('rio-de-janeiro');

promTwo.then( serv =>{
    console.log(serv)
},(reject)=>{
    console.log(reject);
})

