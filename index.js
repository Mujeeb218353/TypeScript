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