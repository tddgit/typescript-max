// function gimmieFive<T>(x: T): T[] {
//   return [x, x, x, x, x];
// }
// enum CardNumber {
//   "2" = 1,
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "V",
//   "Q",
//   "K",
//   "A",
// }
//
// enum Suit {
//   Club,
//   Diamond,
//   Heart,
//   Spade,
// }
//
// let threes: number[] = gimmieFive(3);
// let eggs: string[] = gimmieFive("egg");
//
// let cards = Array<[Suit, CardNumber]>(52);
// let data: Promise<Response> = fetch("http://sindresorhus.com/");
//
// interface MyProps {
//   title: string;
// }
// interface MyState {
//   isClicked: boolean;
// // }
// // // class MyComponent extends Component<MyProps, MyState> {}
//
// function midpoint<T extends Point2D>(p1: T, p2: T): T {}
//
// interface IFileReader<T extends File> {
//   readFile(file: T): Blob;
// }
//
// class Account {
//   protected email: string;
//   private password: string;
//   public accountId: number;
// }
//
// class SharedAccount extends Account {
//   setEmail(newEmail: string) {
//     this.email = newEmail;
//   }
// // }
//
// function add(x: number, y: number): number;
// function add(x: string, y: string, radix: number): number;
// function add(
//   x: number | string,
//   y: number | string,
//   radix: number = 10
// ): number | undefined {
//   x;
//   if (typeof x === "string" && typeof y === "string") {
//     return parseInt(x, radix) + parseInt(y, radix);
//   } else if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   } else {
//     return undefined;
//   }
// }
//
// add("2", "3", 10);
// add(1, 2);
// add("3", "5");
import { formatWithOptions } from "util";

let x = "hello world";
x = "hello mars";
// x = 42; ERROR
const y = "hello world";
function foo(arg: "hello mars") {}

foo("hello mars");
let hellomars: "hello mars" = "hello mars";
foo(hellomars);

const yObj = {
  foo: "hello",
};

let z: number | string;
z = 41;
z = "abc";

let aa: number[] = [];
aa.push(33);
// aa.push("abc");

let aaa = [6];
let bb: [number, string, string, number] = [
  123,
  "Fake Street",
  "Nowhere US",
  10110,
];
// bb = [1, 2, 3];
bb.push();

let cc: { houseNumber: number; streetName: string };
cc = {
  streetName: "Fake Street",
  houseNumber: 123,
};

// cc = {
//     houseNumber: 1
// }

let dd: { houseNumber: number; streetName?: string };
dd = {
  houseNumber: 123,
  // x=5
};

export interface HasPhoneNumber {
  name: string;
  phone: number;
}

export interface HasEmail {
  name: string;
  email: string;
}

let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? {
        name: "Mike",
        phone: 22558456,
      }
    : {
        name: "Mike",
        email: "mike@example.com",
      };

contactInfo.name;

let otherContactInfo: HasEmail & HasPhoneNumber = {
  name: "Mike",
  email: "mike@example.com",
  phone: 55555555,
};
otherContactInfo.name;
otherContactInfo.phone;
otherContactInfo.email;

function validateInputField(input: HTMLInputElement) {}

function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name}<${to.email}`,
    body: "Youre prequalified for the loan!",
  };
}

const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name}<${to.phone}`,
    body: "Youre prequalified for the loan!",
  };
};

function getNameParts(contact: { name: string }) {
  const parts = contact.name.split(/\s/g);
  if (parts.length === 1) {
    return { name: parts[0] };
  }

  if (parts.length) {
    throw new Error(`Can't caluculate name parts from name`);
  }
  return {
    first: parts[0],
    middle:
      parts.length === 2
        ? undefined
        : parts.slice(1, parts.length - 2).join(""),
    last: parts[parts.length - 1],
  };
}

function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;
function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}
contactPeople("email", { name: "foo", email: "" });
contactPeople("phone", { name: "foo", phone: 1225444 });
// contactPeople("email", { name: "foo", phone: 1225444 });

function sendMessage(
  this: HasEmail & HasPhoneNumber,
  prefferedMethod: "phone" | "email"
) {
  if (prefferedMethod === "email") {
    console.log("sendEmail");
    sendEmail(this);
  } else {
    console.log("sendTextMessage");
    sendTextMessage(this);
  }
}

const c = { name: "Mike", phone: 3388899, email: "mike@example.com" };

function invokeSoon(cb: () => any, timeout: number) {
  setTimeout(() => cb.call(null), timeout);
}

// invokeSoon(() => sendMessage("email"), 500);

const bound = sendMessage.bind(c, "email");
invokeSoon(() => bound(), 500);
invokeSoon(() => sendMessage.apply(c, ["phone"]), 500);

type StringOrNumber = string | number;
const xx: StringOrNumber = "adffd";

type HasName = { name: string };

type NumVal = 1 | 2 | 3 | NumArr;

type NumArr = NumVal[];

export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  contryCode: string;
}

interface ContactMessanger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}

type ContactMessanger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;

const emailer: ContactMessanger1 = (_contact, _message) => {
  //
};

interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}

interface PhoneNumberDict {
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}

// const d: PhoneNumberDict = {};
// if (typeof d.abc === "object") {
//   d.abc;
// }

const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 5551212 },
  home: { areaCode: 321, num: 555442 },
};

interface PhoneNumberDict {
  home: {
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}

phoneDict.home;
phoneDict.office;
phoneDict.mobile;

export class Contact implements HasEmail, HasPhoneNumber {
  protected age = 0;
  private passwordVal: string | undefined;
  constructor(
    public email: string,
    public name: string = "no email",
    public phone: number
  ) {
    this.age = 35;
    if (phone > 0) {
    }
  }
  get password(): string {
    if (!this.passwordVal) {
      this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
    }
    return this.passwordVal;
  }
  //   async init() {
  //     this.password = Math.round(Math.random() * 1e14).toString(32);
  //   }
}

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
  public abstract phone: number;
  constructor(public name: string, public email: string) {}

  abstract sendEmail(): void;
}

class ConcreteContact extends AbstractContact {
  constructor(public phone: number, name: string, email: string) {
    super(name, email);
  }
  sendEmail() {
    console.log("sending email");
  }
}



//
// const osPrefix: string = "os_";
//
// let support = {
//   [osPrefix + "Windows"]: isSupported("Windows"),
//   [osPrefix + "iOS"]: isSupported("iOS"),
//   [osPrefix + "Android"]: isSupported("Android"),
// };
// function isSupported(os: string) {
//   return Math.random() >= 0.5;
// }
//
// let _a;
// let support1 =
//   ((_a = {}),
//   (_a[osPrefix + "Windows"] = isSupported("Windows")),
//   (_a[osPrefix + "iOS"] = isSupported("iOS")),
//   (_a[osPrefix + "Android"] = isSupported("Android")),
//   _a);
// console.log(support1);
