//* VID: 2
let str: string = "hello";
let num: number = 1;
let bool: boolean = true;
let fullName: any = "Mujeeb Ur Rehman";
let b: unknown;
b = 1;
b = "Unknown";

// @ts-ignore
console.log(str, num, bool, fullName, b);
// @ts-ignore

// * VID: 3
// Write a function to add two numbers
// Catch errors & solve them
// Ts Config File
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 14));

//* VID: 4
// ? Type Annotation
//* Specifying type of a variable, function or class
let a: string = "TypeScript Type Annotation";
console.log(a);

// * VID: 5
// Big Int
let intMaxValue = (Number as any).MAX_SAFE_INTEGER;
console.log("Max Int: ", intMaxValue);
let bigInt: bigint = 900719925474099189534543324324n;
console.log("BigInt 1: ", bigInt);

// Big Int constructor
let bigInt2: bigint = BigInt("9007199254740991898987987");
console.log("BigInt 2: ", bigInt2);

let sumBigInt: bigint = bigInt + bigInt2;
let mulBigInt: bigint = bigInt * bigInt2;
let divBigInt: bigint = bigInt / bigInt2;
console.log("Sum BigInt:", sumBigInt);
console.log("Mul BigInt:", mulBigInt);
console.log("Div BigInt:", divBigInt);

// * VID: 6
// Unknown and any

// Using `any`
let anyValue: any;

anyValue = 42; // Fine
anyValue = "hello"; // Fine
anyValue = {}; // Fine

// You can do anything with `any`, but it's not safe
// console.log(anyValue.toUpperCase()); //! Fine in TypeScript, but might cause a runtime error if not a string

// Using `unknown`
let unknownValue: unknown;

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
const greet = (name: string): string => {
  return `Hello, ${name}`;
};
console.log(greet("Mujeeb Ur Rehman"));

let numbers: number[] = [1, 2, 3, 4, 5];


const average = (arr: number[]): number => {
  let averageNum: number;
  averageNum = arr.reduce((prevNum: number, currentNum: number) => currentNum += prevNum, 0);
  return averageNum / arr.length;
};

console.log(average(numbers));
let arr: Array<number> = [34, 90, 5, 43, 78] 

const maxNum = (arr: number[]): number => {
  let maxNum: number = arr[0]
  for(let i = 1; i < arr.length; i++){
    if( arr[i] > maxNum ){
      maxNum = arr[i]
    }
  }
  return maxNum
}

console.log(maxNum(arr));

// * VID: 9
// Default and Optional Parameters
const greet2 = (name: string, id?: number, greeting: string = "Hello"): string => {
  if (id) {
    return `${greeting}, ${name}! Your ID is ${id}.`;
  }
  return `${greeting}, ${name}!`;
}

console.log(greet2("Mujeeb Ur Rehman", 1));

// * VID: 10
// Array

// Array Using square brackets
let arr1: number[] = [1, 2, 3, 4, 5];

// Array Using Array constructor
let arr2: Array<number> = [1, 2, 3, 4, 5];
let arr3: number[] = new Array(1, 2, 3, 4, 5);

// Array Using Array.from
let arr4: string[] = Array.from(["M", "u", "j", "e", "e", "b"]);
console.log(arr4[0]);

// Array Using Array.of
let arr5: number[] = Array.of(1, 2, 3, 4, 5);

console.log(arr1[4]);

// * VID: 11
// Array Iteration and Methods

const fruits: string[] = ["apple", "banana", "orange"];
const newFruits = fruits.push("grape");
console.log(fruits);
console.log(newFruits); // it returns the new length of the array not the array itself

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log("Foreach: ",fruit));

fruits.map((fruit) => console.log("map: ",fruit));

fruits.filter((fruit) => console.log("filter: ",fruit));

for (const fruit of fruits) {
  console.log('for of: ',fruit);
}

// * VID: 12
// Filter and Map Methods

// Map Method will not modify the original array but will return a new array

const doubleNumbers: number[] = numbers.map((num: number): number => num * 2);
console.log(doubleNumbers);

// Filter Method will not modify the original array but will return a new array

const evenNumbers: number[] = numbers.filter((num: number): boolean => num % 2 === 0);
console.log(evenNumbers);

// * VID: 13
// Objects

const user:{
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  isStudent: true,
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};

console.log(user);

// * VID: 14
// Type Aliases

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  class?: string;
  address: {
    city: string;
    country: string;
  };
};

const user2: Person = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  isStudent: true,
  address: {
    city: "Shp",
    country: "Pakistan",
  },
};

console.log(user2);

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product : Product = {
  name: "Laptop",
  price: 1000,
  quantity: 10,
};

const calculateTotalPrice = (product: Product): number => {
  return product.price * product.quantity;
};

console.log("Total Price:",calculateTotalPrice(product));

// * VID: 15
// Function Call Signatures
// Call Signature is defining the parameters and return type of a function in an object or interface or class or type alias.
type Student = {
  name: string;
  age: number;
  greeting: (country: string) => string;
};

const student1: Student = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  greeting: (country): string => `Hello, I am ${student1.name} and I am ${student1.age} years old and I live in ${country}.`,
};  

console.log(student1.greeting("Pakistan"));

// Pure Function Call Signatures

type MyObject = {
  (input: string): string; // Call signature
  propertyName: string;    // Property
};

const myObject: MyObject = (input: string) => {
  return `Hello, ${input}!`;
};

myObject.propertyName = "Greeting Function";

console.log(myObject("World")); 
console.log(myObject.propertyName); 

// * VID: 16
// Enums

enum Roles {
  user = "user",
  admin = "admin"
}

type LoginDetails = {
  email: string;
  password: string;
  role: Roles;
}

const loginDetails1: LoginDetails = {
  email: "UQO8P@example.com",
  password: "123456",
  role: Roles.admin,
}

const loginDetails2: LoginDetails = {
  email: "UQO8P@example.com",
  password: "123456",
  role: Roles.user,
}

const userLogin = (loginDetails: LoginDetails): string => {
  return `Hello, ${loginDetails.email} and your role is ${loginDetails.role}`
}

console.log(userLogin(loginDetails1));
console.log(userLogin(loginDetails2));

// * VID: 17
// Tuples

type PersonInfo = readonly [string, number, boolean]

const person2Info: PersonInfo = ["Mujeeb Ur Rehman", 23, true];

console.log(person2Info);

// * VID: 18
// Union and Intersection 

const unionFunction = (a: number | string, b: number | string): number | string => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log("Union:",unionFunction(1, 2));

type PersonDetails = {
  name: string;
  age: number;
}

type Employee = {
  employeeId: number;
  department: string;
}

type EmployeeDetails = PersonDetails & Employee;

const employeeDetails: EmployeeDetails = {
  name: "Mujeeb Ur Rehman",
  age: 23,
  employeeId: 123,
  department: "IT",
}

console.log("Intersection:",employeeDetails);

type User = {
  name: string;
  age: number;
}

type LocationInfo = {
  city: string;
  country: string;
}

const userInfo = {
  name: "Mujeeb",
  age: 23
}

const locationInfo = {
  city: "karachi",
  country: "Pakistan"
}

const createAccount = (user: User, location: LocationInfo) => {
  return {...user, ...location}
}

const userAccount: User & LocationInfo = createAccount(userInfo, locationInfo)

console.log(userAccount);

// * VID: 19
// Generics

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42));  
console.log(identity<string>("Hello")); 

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result = swap<string, number>(["Hello", 42]);
console.log(result); 

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const numberPair: KeyValuePair<number, string> = { key: 1, value: "One" };
const stringPair: KeyValuePair<string, boolean> = { key: "isValid", value: true };

console.log(numberPair);
console.log(stringPair); 

// * VID : 20
// Function Overloading with Generics

const userDetails = <T,U>(a:T, b:U): string => {
  if(typeof a === "string" && typeof b === "number") {
    return `Name: ${a}, Age: ${b}`;
  } else if(typeof a === "number" && typeof b === "string") {
    return `Name: ${b}, Age: ${a}`
  }else{
    return `Name: ${a}, Role: ${b ? "Admin" : "User"}`
  }
}

console.log("Number and String:",userDetails(23, "Mujeeb"));
console.log("String and Number:",userDetails<string, number>("Mujeeb", 23));
console.log("String and Boolean:",userDetails<string, boolean>("Mujeeb", true));
console.log("Boolean and String:",userDetails<boolean, string>(false, "Mujeeb"));

// * VID: 21
// Interface

interface Persons {
  name: string;
  age: number;
}

const person1: Persons = {
  name: "Mujeeb Ur Rehman",
  age: 23
}

console.log(person1);