// //
// //
// // type StringOrNumber = string | number;
// //
// // type HasName = { name: string };
// //
// // type NumVal = 1 | 2 | 3 | NumArr;
// // //
// // // interface NumArr extends Array<NumVal>;
// //
// // const x_new: NumVal = [1, 2, 3, 1, 1, [3, 1, 1, 2]];
// // export interface HasInternationalPhoneNumber extends HasPhoneNumber {
// //   contryCode: string;
// // }
// //
// // type Age = number;
// //
// // interface ContactMessenger1 {
// //   (contact: HasEmail | HasPhoneNumber, message: string): void;
// // }
// // type ContactMessanger2 = (
// //   contact: HasEmail | HasPhoneNumber,
// //   message: string
// // ) => void;
// //
// // const emailer: ConctactMessanger1 = (_contact, _message) => {
// //   /**... */
// // };
//
// interface PhoneNumberDict {
//   [numberName: string]:
//     | undefined
//     | {
//         areaCode: number;
//         num: number;
//       };
// }
//
// const d_new: PhoneNumberDict = {};
//
// if (typeof d_new.abc === "string") {
//   d_new.abc;
// }
//
// const phoneDict: PhoneNumberDict = {
//   office: { areaCode: 321, num: 5551212 },
//   home: { areaCode: 321, num: 5550010 },
//   iphone: { areaCode: 321, num: 550010 },
// };
//
// phoneDict.office;
// phoneDict.home;
// phoneDict.mobile;
//
// interface PhoneNumberDict {
//   home: {
//     areaCode: number;
//     num: number;
//   };
//   office: {
//     areaCode: number;
//     num: number;
//   };
// }

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  if (hex.length === 3) {
    let hr = hex[0];
    let hg = hex[1];
    let hb = hex[2];

    return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }
  let [r, g, b] = [0, 2, 4]
    .map((offset) => hex.substring(offset, offset + 2))
    .map((hexCh) => parseInt(hexCh, 16));
  return { r, g, b };
}

export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map((decCh) => Math.max(0, Math.min(255, decCh)).toString(16))
    .map((hexCh) => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join("");
}

console.log(rgbToHex(255, 0, 0));

export function hexToRgb() {}

export function rgbToHex() {}

let teacherAge: number = 34;

let input = document.querySelector("input#name_field") as HTMLInputElement;

let input1 = <HTMLInputElement>document.querySelector("input#name_field");

// function login (username: string, password: string): User {}

// function validateInputField(input: HTMLInputElement) {}

let myCar: {
  make: string;
  model: string;
  year: number;
};

myCar = {
  make: "Honda",
  model: "Accord",
  year: 1992,
  color: { r: 255, g: 0, b: 0 },
} as { make: string; model: string; year: number };

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Car {
  color: string;
}

let lisasCar: Car = {
  make: "Ford",
  model: "Monster Truck",
  year: 2016,
  color: "#ffff",
};

let age = 34;
let myAge = age as any;
myAge = "35";

function add1(a: number, b: number): number {
  return a + b;
}

let x: any = "hello";
x = {};
// let y: never = 'goodbye'

function add2(a: any, b: any): any {}

function washCar(car: { make: string; model: string; year: number }) {}

washCar(myCar);

parseInt("124", 10) === 124;
parseInt("124", 10).toString(16) === "7c";
parseInt("7c", 16) === 124;

import { IUser, ConfirmedUser, IAdmin } from "./UserAdminInterface";

export class AccountManager {
  users: IUser[] = new Array();

  register(email: string, password: string): IUser {
    if (!email) {
      throw "Must provide an email";
    }
    if (!password) {
      throw "Must provide a password";
    }
    let user = { email, password };
    this.users.push(user);
    return user;
  }
  activateNewUser(approver: IAdmin, userToApprove: IUser): ConfirmedUser {
    if (!approver.adminSince) throw "Approver is not an" + " admin";
    let toConfirm = userToApprove as ConfirmedUser;

    toConfirm.isActive = true;
    return toConfirm;
  }

  promoteToAdmin(existingAdmin: IAdmin, user: ConfirmedUser): IAdmin {
    if (!existingAdmin.adminSince) throw "Not a admin";
    if (user.isActive !== true)
      throw "User must be" + " active in order to be promoted";
    let newAdmin = user as IAdmin;
    newAdmin.adminSince = new Date();
    return newAdmin;
  }
}

let u: ConfirmedUser = { email: "ex@ex.ru", password: "adfad", isActive: true };
let admin: IAdmin = {
  email: "ex@ex.ru",
  password: "adfad",
  isActive: true,
  adminSince: new Date(),
};

let am = new AccountManager();

am.promoteToAdmin(admin, u);
