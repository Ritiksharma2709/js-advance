//if
// if(true){
// }
//     if(false){

//     }
//     if(2==2){

//     }
const isUserLoggedIn=true
const temperature=41
if(temperature<50){
console.log("less than 50");

}
else{

    console.log("greater than 50")
}

// <,>,<=,>=,==,!=,===,!==
const score=200
if(score>100){
    const power="fly"
    console.log(`user power:${power}`)
}
// console.log(`user power:${power}`)
// const balance=1000
// // if(balance>500)console.log("test"),//implicit scope
// // console.log("test2");


// if(balance>500){
//     console.log("less than");
    
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 750")
// }
// else{
//   console.log("less tha 1200")  
// }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy the course")
}
if(loggedInFromGoogle|| loggedInFromEmail){
    console.log("user logged in");
}