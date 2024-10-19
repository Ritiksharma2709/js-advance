//const tinder=new Object()  //singleton
const tinder={}  //non singleton

 tinder.id="123abc"
 tinder.name="ritik"
 tinder.isLoggedIn=false
//console.log(tinder);
const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ritik",
            lastname:"sharma"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);
const users=[
    {
        id:1,
        email:"rs@gmail.com"
    },
]
//console.log(users[0].email);
//console.log(tinder);
//console.log(Object.keys(tinder));
//console.log(Object.values(tinder));
//console.log(Object.entries(tinder));

//console.log(tinder.hasOwnProperty('isLogged'));



const course={
    coursename:"js in hindi",
    prices:"999",
    courseInstructor:"ritik"
}
const{courseInstructor:instructor}=course
console.log(instructor);
/*const navbar=({company})=>{

}
navbar(company="ritik")*/
/*{
    "name":"ritik",
   " coursename":"hindi",
    "price":"free"
}*/
[
    {},
    {},
    {}
]
