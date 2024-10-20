var c=300
//global scope
let a=300
if(true){
    let a=10
    const n=20
    var c=30//block scope
    // console.log("inner : ",a)
}



//console.log(a);
//console.log(b);
//console.log(c);
function one(){
    const username="ritik"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()
if(true){
    const username="ritik"
    if(username==="ritik"){
        const website="youtube"
        // console.log(username+website);
    }
    //console.log(website);
}
// console.log(username);

// +++++interesting+++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addtwo(5))
const addtwo=function(num){//expression
    return num+2
}
