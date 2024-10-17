//primitive
//7types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scorevalue=100.3
const isLoggedIn=false
const outsidetemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')//datattype symbol
console.log(id===anotherId)
const bigNumber=33344444554455444n
//refrence(Nun primitive)

//array,Objects,Funtions
const heroes=["shaktiman","nagraj","doga"]//datatypes object
let myObj={
    name:"ritik",
    age:"22"

}//datatype object
const myfunction=function(){
console.log("hello world")
}//datatype function also known as object function
console.log(typeof id);




//++++++++++++++++++++++++++++++++++++

//stack(primitive),heap(non primitive)
let myYoutubename="factzwar"
let anothername=myYoutubename
anothername="'ritik"
console.log(anothername);

let user={
    email:"user@google.com",
    upi:"user#ybl"
}
let userTwo=user
userTwo.email="hitesh@"
console.log(user.email);
console.log(userTwo.email);


