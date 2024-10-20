const user={
    username:"ritik",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)
    }


}
//  user.welcomemessage();
//  user.username="sam"
//  user.welcomemessage()

// console.log(this)
// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined
// }
// chai()
// const chai=function(){
//     let username="ritik"
//     console.log(this.username);
// }
const chai=()=>{
    let username="ritik"
    console.log(this);
}
// chai()
// const addTwo=(num1,num2)=> num1+num2//implicit return
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"ritik"})
console.log(addTwo(3,5))
// const myArray=[2,5,3,7,8]
// myArray.forEach(()=>())