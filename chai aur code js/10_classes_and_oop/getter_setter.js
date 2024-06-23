class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password;
    }

    set password(value){
        this._password = value.toUpperCase();
    }
}

const htesh = new User("h@gmail.com", "asdfg ");
console.log(htesh.password);