

export default class formController {


    constructor(){
        this.currentUser = {};
        this.saveUser = {};
    }



    reset(){
        this.currentUser.name = this.saveUser.name;
        this.currentUser.email = this.saveUser.email;
    }
    save(user){
        this.saveUser.name = user.name;
        this.saveUser.email = user.email;
    }

}