class User{
    constructor(email,password){
        this.email=email,
        this.password=password //maximum call stack size is increased
    }
get email(){
    return this._email.toUppercase()
}
set email(value){
     this._email=value
}


    get password(){
return this._password.toUpperCase()
    }
    set password(value){
this._password=value
    }

}
const hitesh=new User("hitesh@.ai","123")

console.log(hitesh.password)