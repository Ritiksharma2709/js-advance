//singleton  ==constructor se bnega

//Object.create
//object literal

const mySym= Symbol("key1")



const jsuser={
name:"ritik",//take key as string
"fullname":"ritiksharma",
[mySym]:"mykey1",///symbol
age:18,
location:"indore",
email:"ritiksharma@google.com",
isLoggedIn:false,
lastLoginDays:["monday","saturday"]


}
//console.log(jsuser.name)
//console.log(jsuser["email"]);
//console.log(jsuser["fullname"]);
//console.log(jsuser[mySym]);
//jsuser.email="ritik#chatgt.com"
//Object.freeze(jsuser);//*** */
jsuser.email="riuhfhfhff"
//console.log(jsuser);


jsuser.greeting= function(){
    console.log("hello js user");
    
}
jsuser.greetingTwo=function(){
    console.log(`hello js user2 mere bhai , ${this.name}`);
}
console.log(jsuser.greeting());//function anonymous
console.log(jsuser.greetingTwo());