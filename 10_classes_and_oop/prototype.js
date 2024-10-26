// let myName="hitesh    "
// console.log(myName.truelength);

// const truelength=new 
let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}
Array.prototype.heyHitesh=function(){
    console.log(`Hitesh say heloo`)
}
// heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyHitesh()
// heroPower.heyHitesh()

//inheritance

const user={
    name:"chai",
    email:"chai@google.com",

}


const teacher={
    makeVideo:true
}
const teachingSupport={
    isavailable:false
}
const TASupport={
    makeAssignment:'js assignment',
    fulltime:true,
__proto__:teachingSupport

}
teacher.__proto__=user;

//modern syntax
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername="chaiaurcode    "
String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`TRue length is: ${this.trim().length}`)
}
anotherUsername.truelength()
"hitesh".truelength()
"iceTea".truelength()
