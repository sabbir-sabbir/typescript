class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }
}

class Student extends User {
    studentID: number;

    constructor(userName: string, age: number, studentID: number) {
        super(userName, age);
        this.studentID = studentID;
    }

    MyDisplay(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, id: ${this.studentID}`);
    }
};

let Student1 = new Student("Sabbir", 25, 101);
Student1.studentID;
