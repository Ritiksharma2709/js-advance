//january 1 1970 calculate in ms
let mydate=new Date();
//console.log(mydate.toString())
//console.log(mydate.toLocaleString())
//console.log(mydate.toDateString())
//console.log(typeof mydate);//object
//let mynewdate=new Date(2023,0,23)
//let mynewdate=new Date(2023,0,23,5,3)
//let mynewdate=new Date("2023-01-14")
let mynewdate=new Date("01-14-2023")
//console.log(mynewdate.toLocaleString());

let mytimestamp=Date.now()
//console.log(mytimestamp);
//console.log(mynewdate.getTime());
//console.log(Math.floor(Date.now()/1000)); convert into second
let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
newDate.toLocaleString('default',{
    weekday:"long",
    //timeZone:''
})