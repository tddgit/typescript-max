type StringOrNumber = string | number;

type HasName = { name: string };

type NumVal = 1 | 2 | 3 | NumArr;
//
// interface NumArr extends Array<NumVal>;

const x_new: NumVal = [1, 2, 3, 1, 1, [3, 1, 1, 2]];
// export interface HasInternationalPhoneNumber extends HasPhoneNumber {
//   contryCode: string;
// }
//
// type Age = number;
//
// interface ContactMessenger1 {
//   (contact: HasEmail | HasPhoneNumber, message: string): void;
// }
// type ContactMessanger2 = (
//   contact: HasEmail | HasPhoneNumber,
//   message: string
// ) => void;
//
// const emailer: ConctactMessanger1 = (_contact, _message) => {
//   /**... */
// };

interface PhoneNumberDict {
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}

const d_new: PhoneNumberDict = {};

if (typeof d_new.abc === "string") {
  d_new.abc;
}

const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 5551212 },
  home: { areaCode: 321, num: 5550010 },
  iphone: { areaCode: 321, num: 550010 },
};

phoneDict.office;
phoneDict.home;
phoneDict.mobile;

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
