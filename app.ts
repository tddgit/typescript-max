type Age = number;

type Person = {
  name: string;
  age: Age;
};

let age: Age = 55;
let driver: Person = {
  name: "James May",
  age: age,
};

{
  let age = 55;
  let driver: Person = {
    name: "James May",
    age: age,
  };
}

type Color = "red";
// type Color = 'blue'

// type Color = 'red'
let x = Math.random() < 0.5;

if (x) {
  type Color = "black";
  let b: Color = "black";
} else {
  let c: Color = "red";
}

type Cat = {
  name: string;
  purrs: boolean;
};

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type CatOrDogBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

//Dog
let a3: CatOrDogBoth = {
  name: "Domino",
  barks: true,
  wags: true,
};

let b: CatAndDog = {
  name: "Mishanya",
  purrs: true,
  barks: false,
  wags: true,
};

// console.log(a3, b);

function trueOrNull(isTrue: boolean): boolean | null {
  if (isTrue) return isTrue;
  return null;
}

type Returns = string | null;

function some(a: string, b: number) {
  return a || b;
}

{
  let a: number[] = [1, 2, 3];
  let b: Array<string> = ["a", "b"];
  let c: string[] = ["a"];
  let d: (string | number)[] = [1, "2"];
  const e: (string | number)[] = [2, "b"];

  let f = ["red"];
  f.push("blue");
  // f.push(true)
  let g = [];
  g.push(1);
  g.push("red");
  console.log(g);

  let h: Array<number> = [];

  h.push(1);
  // h.push('red')
}

let d = [1, "a"];
d.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});

function buildArray() {
  let a = [];
  a.push(1);
  a.push("x");
  return a;
}

let myArray = buildArray();
// myArray.push(true);
{
  let a: [number] = [1];
  let b: [string, string, number] = ["malcolm", "gladwell", 1963];
  // b = ['queen', 'elisabeth', 'ii' 1926]

  let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];
  let moreTrainFares: ([number] | [number, number])[] = [
    [3.75],
    [8.25, 7.7],
    [10.5],
  ];
}

let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);
// as[4] = 5

// as.pop()
// as.push(2)

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;

function a2(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}

function b2() {
  return undefined;
}

function c() {
  let a = 2 + 2;
  let b = a * a;
}

function err() {
  throw TypeError("I always error");
}

function e() {
  while (true) {}
}

enum Language {
  English,
  Russian,
  French,
}

enum Birds {
  Conrad = 1,
  MockingBird,
  OtherBird,
}

console.log(Birds["Conrad"]);
console.log(Language.French);
console.log(Language[1]);

enum Language {
  Chinese = 3,
  Vietnamese,
}

console.log(Language[3]);

enum Language2 {
  English = 100,
  Spanish = 200 + 300,
  Russian = 400 + 500,
}

console.log(Language2.Russian);

enum Color1 {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0x10050,
  White = 255,
}

let red = Color1.Pink;
let blue = Color1["Blue"];

// let green =

let numRed = Color1[0];
console.log(numRed);
console.log(Color1[6]);

const enum LanguageNew {
  English,
  Spanish,
  German,
}

// console.log(LanguageNew[6]);

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string) {
  return "hello" + name;
}

let greet2 = function (name: string) {
  return "hello" + name;
};

let greet3 = (name: string) => {
  return "hello" + name;
};

let greet4 = (name: string) => "hello" + name;

let greet5 = new Function("name", "return 'hello' + name");

add(1, 2);

greet("Crystal");

// add(1)
//
// add(1, 'x')

function log(message: string, userId: string = "Not logged in") {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
}

console.log(log("Page loaded"));
console.log(log("User signed in", "da763be"));

type Context = {
  appId?: string;
  userId?: string;
};

function logNew(message: string, context: Context = {}) {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, context.userId);
}

function sum(numbers: number[]): number {
  return numbers.reduce((acc, a) => acc + a, 0);
}

console.log(sum([1, 2, 3, 4]));

function sumVariadic(...numbers: number[]): number {
  return numbers.reduce((acc, a) => acc + a, 0);
}

console.log(sumVariadic(1, 2, 3, 4, 5));

interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}

function addAgain(a: number, b: number): number {
  return a + b;
}

add(10, 20);
console.log(addAgain.apply(null, [10, 20]));
console.log(addAgain.call(null, 10, 20));
console.log(addAgain.bind(null, 10, 20)());
console.clear();

let xVar = {
  a() {
    return this;
  },
};
console.log(xVar.a());
let a1 = xVar.a;
console.log(a1());

function sumAgain(a: number, b: number): number {
  return a + b;
}

type sum = (a: number, b: number) => number;

function area(radius: number): number | null {
  if (radius < 0) return null;
  return Math.PI * radius ** 2;
}

let r: number = 3;
let a = area(r);
if (a !== null) console.info("result: ", a);

type Log = (message: string, userId?: string) => void;

// type Log = {
//   (message: string, userId?: string): void;
// };

let log2: Log = (message, userId = "Not signed in") => {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
};

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

times((i) => console.log(i), 5);

function f(n: number) {
  console.log(n);
}

times(f, 5);

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
// };
//
// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: string | Date,
//   destination?: string
// ) => {
//   //...
// };

console.clear();
//
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[];
//   // (array: number[], f: (item: number) => boolean): number[];
//   // (array: string[], f: (item: string) => boolean): string[];
//   // (array: object[], f: (item: object) => boolean): object[];
// };
//
// // type Filter<T> = {
// //   (array: T[], f: (item: T) => boolean): T[];
// // };
//
// let filter: Filter<number> = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (f(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
//
// filter([1, 2, 3, 4], (_) => _ < 3);
//
// // type Filter = {
// //   (array: unknown, f: unknown) => unknown[]
// // }
//
// let names = [
//   { firstName: "beth" },
//   { firstName: "caitlyn" },
//   { firstName: "xin" },
// ];
//
// let result = filter(names, (_) => _.firstName.startsWith("b"));

// type Filter1 = {
//   <T>(array: T[], f: (item: T) => boolean): T[];
// };
// let filter1: Filter = () => {}
//
// type Filter2<T> = {
//   (array: T[], f: (item: T) => boolean): T[];
// };
// let filter2: Filter2<number> = () => {}
//
// type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[];
// let filter3: Filter3 =()=>{}
//
// type Filter4<T> = (array: T[], f: (item: T) => boolean) => T[];
// let filter4: Filter4<string> = () => {}
//
// function filter5<T>(array: T[], f: (item: T) => boolean): T[] {};

// //Asyncronious
// type ExistingUser = {
//   id: number;
//   name: string;
// };
//
// type NewUser = {
//   name: string;
// };
// console.clear();
// setTimeout(() => console.log("A"), 1);
// setTimeout(() => console.log("B"), 2);
// console.log("C");
//
// import * as fs from "fs";
//
// function readFile(
//   path: string,
//   options: { encoding: string; flag?: string },
//   callback: (err: Error | null, data: string | null) => void
// ) {}
//
// fs.readFile(
//   "/var/log/apache2/access_log",
//   { encoding: "utf8" },
//   (error, data) => {
//     if (error) {
//       console.error("error reading file");
//       return;
//     }
//     console.info("success reading", data);
//   }
// );
//
// fs.appendFile(
//   "/var/log/apache2/access_log",
//   "New access log entry",
//   (error) => {
//     if (error) {
//       console.error("error writing", error);
//     }
//   }
// );
//
// function appendAndReadPromise(path: string, data: string): Promise<string> {
//   return appendPromise(path, data).then(() =>
//     readPromise(path).catch((error) => console.error(error))
//   );
// }
// function appendPromise(path, data) {}
//
// function readPromise(path) {}
