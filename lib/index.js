"use strict";
let message = "Hello World";
message += ' again';
console.log(message);
/*
Data Types
let isPresent:Boolean = false; // Boolean
let magic :Number = 123; // Number
let world: string = "Hello" // String
let notDefined: undefined = undefined;
let notPresent: null = null;

let uniqId: symbol = Symbol('star')
let biggy: bigint = 24n // BigInt
*/
/*
Instance Types
let regex: RegExp = new RegExp('ab+c');

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set<number>([1, 2. 3]);

First in First Out collection [this is user created class]
Class Queue<T> {
  primitive data: Array<T> = [];
  push(item: T) {this.data.push(item);}
  pop(): T | undefined {return this.data.shift()}

  let queue: Queue<number> = new Queue();
}
*/
/*
Array and Tuples
let array: number[] = [1, 2, 3, 4]

let tuple: [number, number] = [1, 2];
we can not assign less then 2 or more then 2 number
*/
/*
Object types and Types aliases
let center: {x: number, y: number} {
  x: 0,
  y: 1
}

// type aliases

type Point = {x: number, y: number};
let unit: Point {
  x: 0,
  y: 1
}
*/
/*
Const declearation
type Point = {x: number, y: number}
const point: Point = {x: 0, y: 0};
point = {x: 0, y: 1} // Will give Error

*/
/*
Function
function add(a: number, b: number): number {
  return a + b;
}
function log(message: string): void {
  console.log(message);
}
function sum(...values: number[]): number {
return values.reduce((prev, curr) => {
  return prev + curr;
})
}
sum(2, 3)
sum(2, 3, 4)

First class function
let add: (a: number, b: number) => number;

*/
/*
Structural typing
type User = {id: string}
type Product = {id: string}
let user: User = {id: 'user-1'}
let product: Product = {id: 'product-1'}
This both type are same as type is string, means you can assign any type
user = Product
product = User
As both having same structure

type Point2D = {x: number, y: number}
type Point3D = {x: number, y: number, y: number}

let point2D: Point2D = {x: 0, y: 0}
let point3d: Point3D = {x:0, y:0, z: 0}
in type system extra information is OK
point2D = point3D;
function takesPoint2D(point2D: Point2D) {...}
both having same member but in point3d having 1 extra member
takesPoint2D(point3D);

We can not assign point3D to point2D because 2d having less params
point3D = point2D // Error
*/
/*
Class
class Animal{
  private name: string;
  // We can use #name for private modifier but we need to change tsconfig es version tolatest one e.g ESNEXT
  // here we can use protector modifier
  constructor(name: string) {
    this.name = name;
  }
  public moveObj(dMeter: number): void {
    console.log(`${this.name} moved ${this.dMeter} meter`);
  }
}
let cat = new Animal('cat');
cat.moveObj(10);
cat.name = 'Dog' // Error because of private modifier

Extend class

class Bird extends Animal{
  fly(dMeter: number): void {
    here name can't access so we need to change parent class modifier private to protected so we can access in child class
    console.log(`${this.name} moved ${this.dMeter} meter`);
  }
}
*/
/*
Generics
 Class Queue<T> {
  primitive data: Array<T> = [];
  push(item: T) {this.data.push(item);}
  pop(): T | undefined {return this.data.shift()}

  let queue: Queue<number> = new Queue();
}

const queue = new Queue<number>();
queue.push(1);
const queueStr = new Queue<string>();

// <T> represents Generics which bind datatyes into methods
TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.
*/
/*
Spacial Type: null and unknown
let exampleAny: any;
let exampleUnknown: unknown;

* any bypass any type of datatyes
* unknown is more type safe
unknown is the type-safe counterpart of any . Anything is assignable to unknown , but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

*/
/*
Type Assertion
let hello = load();
const trimmed = (hello as string).trim();
either we need to use type assertion or we need to check typesafe
if(hello === 'string') {hello.trim()};
*/
/*
Type Casting
let leet;
// letter
leet = '1234';
// Use as Number
const num = +leet // this will convert string to number datatype called casting
console.log(num === 1234) // true;
*/
/*
Async Await
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const makeAsync = async() => {
  await delay(1000)
  console.log('1s')
  await delay(1000)
  console.log('2s')
}
makeAsync() // 1s 2s
*/
/*
ts-node: is responsible to generate typescript to js on the fly

run this:
npx ts-node src/index.ts
*/ 
