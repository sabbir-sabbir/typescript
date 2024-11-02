var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.Display = function () {
        console.log("Myname: ".concat(this.userName, ", MyAge: ").concat(this.age));
    };
    return User;
}());
;
var user1 = new User("Sabbir", 25);
user1.Display();
