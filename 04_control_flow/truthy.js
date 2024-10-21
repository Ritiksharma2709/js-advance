const userEmail="["
if(userEmail){
    console.log("got user email")
}
else{
    console.log("dont have user email"); 
}

//falsy values

//false,0,-0,BigInt 0n,"",null,undefined,Nan

//truthy values
//"0",'false'," ",[],{},function(){}
// if(userEmail.length==0){
//     console.log("array is empty");
    
// }
const emptyObj={}
if(Object.keys(emptyObj).length===0){

}console.log("object is empty");

// false==0 true
// false=='' true
// 0=='' true

//Nullish coalescing operator(??):null undefined
let val1;
// val1=5 ?? 10 //5
// val1=null ?? 10 //10
// val1=undefined ?? 15 //15
// val1=null ?? 10 ??20
val1=null ?? undefined //undefined
 
console.log(val1);

//ternary Operator
// condition ? true : false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80 ") :console.log("more than 80")