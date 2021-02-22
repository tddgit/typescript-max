import { log } from "util";

let inferredString = "this is a string";

let inferredNumber = 1;

// inferredNumber = inferredString;

var myVariable = -"test";

let complexType = {
  name: "Stas",
  id: 1,
};

complexType = {
  id: 2,
  name: "another name",
};

// complexType = {id: 2}

complexType = {
  name: "Stas",
  id: 2,
  // prop: true,
};

let arrayOfString: string[] = ["first", "second", "third"];

arrayOfString.forEach((el, index) => console.log(index, el));

for (let i in arrayOfString) {
  console.log(`${i}:${arrayOfString[i]}`);
}
console.clear();

let item1: any = {
  id: 1,
  name: "item 1",
};
item1 = { id: 2 };

{
  let item1 = <any>{ id: 1, name: "Ignore_this_error_message_90019" };
  console.log(item1);
  item1 = { id: 2 };
}

enum DoorState {
  Open,
  Closed,
  Ajar,
}

let openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

console.log(openDoor);

let closedDoor = DoorState["Closed"];
console.log(closedDoor);

{
  enum DoorState {
    Open = 3,
    Closed = 5,
    Ajar = 10,
  }

  console.log(DoorState.Open);
  console.log(DoorState["Ajar"]);
}

const enum DoorStateConst {
  Open,
  Closed,
  Ajar,
}

let constDoorOpen = DoorStateConst.Open;
console.log(constDoorOpen);

enum DoorStateSting {
  Open = "open",
  Close = "close",
  Ajar = "ajar",
}

let doorStateString = DoorStateSting["Open"];
console.log(doorStateString);

let globalString: string;
setGlobalString();
console.log(`globalSting: ${globalString!}`);
function setGlobalString() {
  globalString = "This has been set";
}
console.clear();
let oneMillion = 1_000_000;
console.log(oneMillion);

let limeGreenColor = 0x00_ff_00;
console.log(`limeGreenColor = ${limeGreenColor}`);

function addNumbers(a: number, b: number): number {
  return a + b;
}

let addResult = addNumbers(2, 4);

{
  const addNumbers = (a: number, b: number): number => a + b;
  console.log(addNumbers(56, 34));
}

function concatStrings(a: string, b: string, c?: string): string {
  return a + b + c;
}

console.log(concatStrings("first", "second"));

{
  const concatStrings = function (
    a: string,
    b: string,
    c: string = "c"
  ): string {
    return a + b + c;
  };

  console.log(concatStrings("first", "second"));
}

function testArguments(...args: number[]) {
  if (args.length > 0) {
    for (let i = 0; i < args.length; i++) console.log(`${args[i]}: ${i} `);
  }
}

console.log(testArguments(10, 20, 30));

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2));
console.log(add("first", "second"));

try {
  console.log(`1. attempting to parse JSON`);
  JSON.parse(`abcd=234`);
} catch (error) {
  console.log(`2. try catch error: ${error}`);
} finally {
  console.log(`3. finally`);
}

try {
  console.log(`1. attempting to parse JSON`);
  JSON.parse(`abcd=234`);
} catch {
  console.log(`2. try catch error`);
} finally {
  console.log(`3. finally`);
}
console.clear();

type StringOrNumber = string | number;
let unionType: StringOrNumber;
unionType = 1;
console.log(unionType);
unionType = "one";
console.log(unionType);

console.clear();

function addWithUnion(arg1: string | number, arg2: string | number) {
  return arg1.toString() + arg2.toString();
}

console.log(addWithUnion("one", 1));
function addWithType(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

console.log(addWithType("String", 4));

function testUndef(test1: null | number | undefined) {
  console.log("test parameter: " + test1);
}

testUndef(5);
testUndef(null);
testUndef(undefined);

// function testNull(arg1: number, arg2: number | null | undefined) {
//   let a = arg1 + arg2;
//   let b = arg1 * arg2;
//   let c = arg1 < arg2;
// }

function alwaysTrow(): never {
  throw "This will always throw";
  // return -1;
}

// console.log(alwaysTrow());

enum TestNeverEnum {
  FIRST,
  SECOND,
}

function getEnumValue(value: TestNeverEnum): string {
  switch (value) {
    case TestNeverEnum.FIRST:
      return "First case";
    case TestNeverEnum.SECOND:
      return "Second case";
  }
  let returnSting: never = value;
}

let unknownType: unknown = "an unknown type";
console.log(unknownType);
unknownType = 1;
console.log(unknownType);
unknownType = "sting";
console.log(unknownType);

let someNumber = 5;

someNumber = <number>unknownType;
console.log(someNumber);

let firstObj = {
  id: 1,
  name: "firstObj",
};

let secondObj = { ...firstObj };

console.log(`secondObj: ${JSON.stringify(secondObj)}`);

let nameObj = { name: "nameObj" };
let idObj = { id: 1 };

let newObj = { ...nameObj, ...idObj };

let objPrec1 = {
  id: 1,
  name: "Object prec 1",
};
let objPrec2 = {
  id: 1001,
  descriprion: "object prec 2 descriprion",
};

let objPrec3 = { ...objPrec1, ...objPrec2 };
console.log(objPrec3);

let firstArray = [1, 2, 3, 4, 5];

console.log(`firstArray=${firstArray}`);

let secondArray = [...firstArray, 7, 6, 8];

console.log(`secondArray=${secondArray}`);

console.clear();
console.log(Number.MAX_SAFE_INTEGER);
let highest53bitNumber = 9_007_199_254_740_991n;

for (let i = 0; i < 10; i++) {
  console.log(`${i}:${highest53bitNumber + BigInt(i)}`);
  console.log(typeof highest53bitNumber);
}

interface IComplexType {
  id: number;
  name: string;
}

let newComplexType: IComplexType;
newComplexType = {
  id: 1,
  name: "Natan",
};
