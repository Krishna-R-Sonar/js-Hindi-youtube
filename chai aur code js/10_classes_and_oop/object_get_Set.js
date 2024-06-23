const User = {
    _email: 'hc.com',
    _password: "anc",



    get email(){
        return this._email;
    },

    set email(value){
        this._email = value;
    }
}
const t = Object.create(User);
console.log(t.email);