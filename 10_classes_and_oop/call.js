function SetUsername(username){
    //complex DB call
    this.username=username
    console.log("called")
}

function CreateUser(username,email,password){
    SetUsername.call(this,username)
    
    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@FileSystemWritableFileStream.com","123")
console.log(chai)