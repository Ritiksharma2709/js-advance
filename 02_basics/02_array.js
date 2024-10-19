const marvelheroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvelheroes.push(dc);
//console.log(marvelheroes);
//console.log(marvelheroes[3][1]);
//const allheroes=marvelheroes.concat(dc);//return new array
//console.log(allheroes);
//spread
const allnewheroes=[...marvelheroes, ...dc];
//console.log(allnewheroes);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realanotherarray=anotherarray.flat(Infinity)
console.log(realanotherarray);



console.log(Array.isArray("ritik"))
console.log(Array.from("ritik"))
console.log(Array.from({name:"ritik"}))//interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));