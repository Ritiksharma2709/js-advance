//for
for (let index = 0; index < 10; index++) {
    const element =index;
    // console.log(element);
    if(element==5){
        // console.log(" 5 is best number");
        
    }
    
}
//console.log(element)

for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value:${i}`)
    for (let j = 0; j<=10; j++) {
      
        // console.log(`inner loop value ${j} and outer loop ${i}`)
        // console.log(i+'*'+j+'='+i*j);
    }
    
}
let myArray=["flash","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
 }
//cntrl+c to stop


//break and continue

for (let index = 1; index <= 20; index++) {
 
    if(index==5){
        // console.log(`detected 5`);
        break;
    }
    // console.log(`value of index is ${index}`)
    
}
for (let index = 1; index <= 20; index++) {
 
    if(index==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of index is ${index}`)
    
}
