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