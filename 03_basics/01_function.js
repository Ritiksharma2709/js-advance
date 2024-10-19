

function sayMyName(){
    console.log("R")
    console.log("i")
    console.log("t")
    console.log("i")
    console.log("k")
}
//sayMyName();
/*function addTwo(number1,number2){
  console.log(number1+number2)  
}*/
function addTwo(number1,number2){
   // let result=number1 + number2
    //return result
    return number1+number2
}
const result=addTwo(3,5)
//console.log(result);
function loginuserMessage(username="sam"){
    if(!username){
        console.log("please enter the username");
        return;
    }
    return `${username} just logged in`
}
//console.log(loginuserMessage("hitesh"));
console.log(loginuserMessage());