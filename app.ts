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
