

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
//console.log(loginuserMessage());

//rest
function calculateCartprice(val1,val2,...num1){
return num1
}
console.log(calculateCartprice(200,400,500))

const user={
    username:"ritik",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username:"ritik",
    price:999
})
const mynewArr=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewArr))
console.log(returnSecondValue([200,400,500]))