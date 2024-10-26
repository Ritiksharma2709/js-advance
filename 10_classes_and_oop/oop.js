// const User={
//     username:"ritik",
//     loginCount:8,
//     signedIn:true,
//     getuserDetail:function(){
//         // console.log("Got Detail")
//         // console.log(`username: ${this.username}`)
//     console.log(this);
//     }
// }

// console.log(User.username)
// console.log(User.getuserDetail());
// console.log(this)
// const promiseOne =new Promise()
// const date =new Date()
function user(username,loginCount ,isLoggedIn){
    this.username=username
    this.loginCOunt=loginCount;
    this.isLOggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this implicitly defined
}
const userOne =new user("ritik",12,true)
const userTwo=new user("chaiaurcode",11,false);
console.log(userOne.constructor)
console.log(userTwo);
//instance of operator