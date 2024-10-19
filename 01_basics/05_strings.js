const name="hitesh"
const repocount=50
//console.log(name + repocount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gamename=new String('ritik-rs-com')
//string is object
console.log(gamename[0]);
console.log(gamename.__proto__);//prototype object

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'))

const newstring=gamename.substring(0,4);//last value not include
console.log(newstring)
const anotherstring=gamename.slice(-4,5);
console.log(anotherstring);

const newstringone="  ritik  "
console.log(newstringone);
console.log(newstringone.trim());

const url="https://ritik.com/ritik%20sharma"
console.log(url.replace('%20','_'))
console.log(url.includes('ritik'))
console.log(gamename.split('-'))