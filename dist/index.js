"use strict";
//* VID: 2
let str = "hello";
let num = 1;
let bool = true;
let fullName = "Mujeeb Ur Rehman";
let b;
b = 1;
b = "Unknown";
// @ts-ignore
console.log(str, num, bool, fullName, b);
// @ts-ignore
// * VID: 3
// Write a function to add two numbers
// Catch errors & solve them
// Ts Config File
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 14));
//* VID: 4
// ? Type Annotation
//* Specifying type of a variable, function or class
let a = "TypeScript Type Annotation";
console.log(a);
// * VID: 5
// Big Int
let intMaxValue = Number.MAX_SAFE_INTEGER;
console.log("Max Int: ", intMaxValue);
let bigInt = 900719925474099189534543324324n;
console.log("BigInt 1: ", bigInt);
// Big Int constructor
let bigInt2 = BigInt("9007199254740991898987987");
console.log("BigInt 2: ", bigInt2);
let sumBigInt = bigInt + bigInt2;
let mulBigInt = bigInt * bigInt2;
let divBigInt = bigInt / bigInt2;
console.log("Sum BigInt:", sumBigInt);
console.log("Mul BigInt:", mulBigInt);
console.log("Div BigInt:", divBigInt);
// * VID: 6
// Unknown and any
// Using `any`
let anyValue;
anyValue = 42; // Fine
anyValue = "hello"; // Fine
anyValue = {}; // Fine
// You can do anything with `any`, but it's not safe
// console.log(anyValue.toUpperCase()); //! Fine in TypeScript, but might cause a runtime error if not a string
// Using `unknown`
let unknownValue;
unknownValue = 42; // Fine
unknownValue = "hello"; // Fine
unknownValue = {}; // Fine
// You cannot directly use `unknown` without checking its type first
// console.log(unknownValue.toUpperCase()); // Error: You can't do this without checking the type
// Type check before using `unknown`
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe, because TypeScript knows it's a string
}
if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2)); // Safe, because TypeScript knows it's a number
}
// * VID: 7
//  Type inference is when the compiler can infer the type of a variable or function based on its usage.
//  Type Annotation is when we explicitly declare the type of a variable or function.
// * VID: 8
// Functions
//  Fat arrow function
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(greet("Mujeeb Ur Rehman"));
let numbers = [1, 2, 3, 4, 5];
const average = (arr) => {
    let averageNum;
    averageNum = arr.reduce((prevNum, currentNum) => currentNum += prevNum, 0);
    return averageNum / arr.length;
};
console.log(average(numbers));
let arr = [34, 90, 5, 43, 78];
const maxNum = (arr) => {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
};
console.log(maxNum(arr));
// * VID: 9
// Default and Optional Parameters
const greet2 = (name, id, greeting = "Hello") => {
    if (id) {
        return `${greeting}, ${name}! Your ID is ${id}.`;
    }
    return `${greeting}, ${name}!`;
};
console.log(greet2("Mujeeb Ur Rehman", 1));
// * VID: 10
// Array
// Array Using square brackets
let arr1 = [1, 2, 3, 4, 5];
// Array Using Array constructor
let arr2 = [1, 2, 3, 4, 5];
let arr3 = new Array(1, 2, 3, 4, 5);
// Array Using Array.from
let arr4 = Array.from(["M", "u", "j", "e", "e", "b"]);
console.log(arr4[0]);
// Array Using Array.of
let arr5 = Array.of(1, 2, 3, 4, 5);
console.log(arr1[4]);
// * VID: 11
// Array Iteration and Methods
const fruits = ["apple", "banana", "orange"];
const newFruits = fruits.push("grape");
console.log(fruits);
console.log(newFruits); // it returns the new length of the array not the array itself
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.forEach((fruit) => console.log("Foreach: ", fruit));
fruits.map((fruit) => console.log("map: ", fruit));
fruits.filter((fruit) => console.log("filter: ", fruit));
for (const fruit of fruits) {
    console.log('for of: ', fruit);
}
// * VID: 12
// Filter and Map Methods
// Map Method will not modify the original array but will return a new array
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
// Filter Method will not modify the original array but will return a new array
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
// * VID: 13
// Objects
const user = {
    name: "Mujeeb Ur Rehman",
    age: 23,
    isStudent: true,
    address: {
        city: "Karachi",
        country: "Pakistan",
    },
};
console.log(user);
const user2 = {
    name: "Mujeeb Ur Rehman",
    age: 23,
    isStudent: true,
    address: {
        city: "Shp",
        country: "Pakistan",
    },
};
console.log(user2);
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 10,
};
const calculateTotalPrice = (product) => {
    return product.price * product.quantity;
};
console.log("Total Price:", calculateTotalPrice(product));
const student1 = {
    name: "Mujeeb Ur Rehman",
    age: 23,
    greeting: (country) => `Hello, I am ${student1.name} and I am ${student1.age} years old and I live in ${country}.`,
};
console.log(student1.greeting("Pakistan"));
const myObject = (input) => {
    return `Hello, ${input}!`;
};
myObject.propertyName = "Greeting Function";
console.log(myObject("World"));
console.log(myObject.propertyName);
// * VID: 16
// Enums
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const loginDetails1 = {
    email: "UQO8P@example.com",
    password: "123456",
    role: Roles.admin,
};
const loginDetails2 = {
    email: "UQO8P@example.com",
    password: "123456",
    role: Roles.user,
};
const userLogin = (loginDetails) => {
    return `Hello, ${loginDetails.email} and your role is ${loginDetails.role}`;
};
console.log(userLogin(loginDetails1));
console.log(userLogin(loginDetails2));
const person2Info = ["Mujeeb Ur Rehman", 23, true];
console.log(person2Info);
// * VID: 18
// Union and Intersection 
const unionFunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
console.log("Union:", unionFunction(1, 2));
const employeeDetails = {
    name: "Mujeeb Ur Rehman",
    age: 23,
    employeeId: 123,
    department: "IT",
};
console.log("Intersection:", employeeDetails);
const userInfo = {
    name: "Mujeeb",
    age: 23
};
const locationInfo = {
    city: "karachi",
    country: "Pakistan"
};
const createAccount = (user, location) => {
    return { ...user, ...location };
};
const userAccount = createAccount(userInfo, locationInfo);
console.log(userAccount);
// * VID: 19
// Generics
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity("Hello"));
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
const result = swap(["Hello", 42]);
console.log(result);
const numberPair = { key: 1, value: "One" };
const stringPair = { key: "isValid", value: true };
console.log(numberPair);
console.log(stringPair);
// * VID : 20
// Function Overloading with Generics
const userDetails = (a, b) => {
    if (typeof a === "string" && typeof b === "number") {
        return `Name: ${a}, Age: ${b}`;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return `Name: ${b}, Age: ${a}`;
    }
    else {
        return `Name: ${a}, Role: ${b ? "Admin" : "User"}`;
    }
};
console.log("Number and String:", userDetails(23, "Mujeeb"));
console.log("String and Number:", userDetails("Mujeeb", 23));
console.log("String and Boolean:", userDetails("Mujeeb", true));
console.log("Boolean and String:", userDetails(false, "Mujeeb"));
const person1 = {
    name: "Mujeeb Ur Rehman",
    age: 23
};
console.log(person1);
console.log(person1.name);
// * VID: 23 OOP
// Classes and Constructors
class PersonClass {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hello, My name is ${this.name} and I am ${this.age} years old and I love ${this.hobbies.join(", ")}`;
    }
}
const personsClass1 = new PersonClass("Muhammad", 23, ["Reading", "Preaching"]);
console.log(personsClass1.hobbies[0]);
console.log(personsClass1.introduce());
// * VID: 24
// Inheritance and super key word
class StudentClass extends PersonClass {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    Introduce = () => {
        // return `Hello, My name is ${this.name} and I am ${this.age} years old and I have grade ${this.grade} and I love ${this.hobbies.join(", ")}.`;
        return `${super.introduce()} and I have grade ${this.grade}.`;
    };
}
const stud1 = new StudentClass("Mujeeb", 23, ["Coding", "Reading"], "A");
console.log(stud1.Introduce());
// * VID: 25
// Access Modifiers
// Public: Accessible from anywhere (inside, outside, and subclasses).
// Private: Accessible only within the class itself.
// Protected: Accessible within the class and its subclasses, but not outside.
/*

 --------------------------------------------
| Modifiers |  Parent  |  Child   | Outside  |
|-----------|----------|----------|----------|
| public    |   Yes    |    Yes   |   Yes    |
| protected |   Yes    |    Yes   |   No     |
| private   |   Yes    |    No    |   No     |
|___________|__________|__________|__________|

*/
// Class defined outside the Parent-Child relationship
class Outside {
    name;
    constructor(name) {
        this.name = "Public: " + name;
    }
}
// Parent class demonstrating different access modifiers
class Parent {
    name1;
    name2;
    name3;
    constructor(name1, name2, name3) {
        this.name1 = name1;
        this.name2 = name2;
        this.name3 = name3;
    }
    showPrivateName() {
        console.log("Parent Class");
        console.log("Public: ", this.name1);
        console.log("Private: ", this.name2);
        console.log("Protected: ", this.name3);
    }
}
class Child extends Parent {
    constructor(name1, name2, name3) {
        super(name1, name2, name3);
    }
    showProtectedAndPublicName() {
        console.log("Child Class");
        console.log("Public: ", this.name1);
        // console.log("Private: ",this.name2); not accessible for child
        console.log("Protected: ", this.name3);
    }
}
const outside = new Outside("Name");
console.log(outside.name);
const parent111 = new Parent("Name 1", "Name 2", "Name 3");
parent111.showPrivateName();
const child = new Child("Name 1", "Name 2", "Name 3");
child.showProtectedAndPublicName();
// * VID: 26
// Short Hand Properties
class EmployeeClass {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
const emp1 = new EmployeeClass("Mujeeb", 23, 50000);
console.log(emp1.name, emp1.age);
// * VID: 27
// Getters and Setters
class UserData {
    name;
    _age; // Using the definite assignment assertion (!)
    constructor(name) {
        this.name = name;
    }
    set age(age) {
        if (age < 0 || age > 150) {
            throw new Error("Age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        return this._age;
    }
}
const userData = new UserData("Mujeeb-Ur-Rehman");
userData.age = 23;
console.log(userData.age);
// * VID: 28
// Practice of Classes
// Bank Account
class BankAccount {
    _balance = 0;
    set balance(balance) {
        if (this._balance < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
}
const bankAccount = new BankAccount();
bankAccount.balance = 100000;
console.log(bankAccount.balance);
class Temperature {
    _celsius = 0;
    set celsius(celsius) {
        this._celsius = celsius;
    }
    get celsius() {
        return this._celsius;
    }
    set fahrenheit(fahrenheit) {
        this._celsius = (fahrenheit - 32) * 5 / 9;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
}
const temperature = new Temperature();
temperature.celsius = 37;
console.log(temperature.fahrenheit + " F");
temperature.fahrenheit = 98.6;
console.log(temperature.celsius + " C");
