class User {
     userName: string;
     age: number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.age = age;

    }
       Display(): void{
        console.log(`Myname: ${this.userName}, MyAge: ${this.age}`)
       }


};

let user1 = new User("Sabbir", 25);
user1.Display();