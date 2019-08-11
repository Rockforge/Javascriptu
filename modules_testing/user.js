class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}
console.log(typeof(User));



// Constructor function
// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function() {
//     console.log(this.name)
// };

// let user = new User('Christian');
// user.sayHi();