class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //defining Methods
    getFullName(){
        return this.firstName + " : " + this.lastName
    }
    hayHi(){
        console.log("Hi from " + this.getFullName());
    }
}
let person2 = new Person("JOHN", "Doe");
person2.hayHi();
/**
 * Constructor Function
 */
function MyPerson(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };

    this.sayHi = function () {
        console.log("Hi from " + this.getFullName());
    };

let person2 = new MyPerson("Gabriel", "Iglesias");
person2.sayHi();

//Class Expression

let Animal = class {
    sayHi() {
        console.log("Hi");
    }
};
new Animal().sayHi();

class User {
    constructor(name) {
      // invokes the setter
        this.name = name;
    }

    //getter
    get name() {
        return this._name;
    }

    //setter
    set name(value) {
        if (value.length < 4) {
        console.log("Name is too short");
        return;
    }
    this._name = value;
    }

    // computed method name
    ["say" + "Hi"]() {
        console.log("Hello from " + this.name);
    }
}
let user = new User("John");
console.log(user.name);
user.sayHi();