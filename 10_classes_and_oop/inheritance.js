class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USENAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email 
        this.password=password
    }

    addCourse(){
        console.log(`A ne course is added by ${this.username}`)
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chaiaddCourse();
const masalaChai=new User("masaslachai")
masalaChai.logMe()
console.log(chai===masalaChai);
console.log(chai instanceof Teacher)
