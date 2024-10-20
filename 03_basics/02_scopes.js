var c=300
//global scope
let a=300
if(true){
    let a=10
    const n=20
    var c=30//block scope
    console.log("inner : ",a)
}



console.log(a);
//console.log(b);
console.log(c);


