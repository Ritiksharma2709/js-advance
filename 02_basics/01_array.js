//array

//const myArr=[0,1,2,3,4,5,true,"ritik"]; in array there are number boolean and strings
const myArr=[0,1,2,3,4,5];
console.log(myArr[0]);//shallow copies saame refrence 
//deep copies =>not share same refrence
const myHeroes=["shaktiman","nagraj"];
const myArr2=new Array(1,2,3,4)
console.log(myArr2[1]);

//Array methods
//myArr.push(6);
//myArr.push(7);
//myArr.pop();
//myArr.unshift(9);
//myArr.shift();

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3))
const newArr=myArr.join();//bind and convert the array into the string
//console.log(myArr);
//console.log(newArr);//typeof strings

//slice,splice
console.log("A " , myArr);
const myn1 =myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(1,3);//remove part from the original array
console.log("C ", myArr);
console.log(myn2);