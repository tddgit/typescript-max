// const AsJSON = (x =>
//   class extends x {
//     asJSON() {
//       return JSON.stringify(this);
//     }
//   };

class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  startEngine() {
    return "VROOOM";
  }
}

let myCar = new Car("Honde", "Accord", 2017);

enum AcctType {
  Checking,
  Savings,
  MoneyMarket,
}

type Acct = [number, AcctType];

let account: Acct = [9142.14, AcctType.Checking];

enum Suit {
  Club,
  Diamond,
  Heart,
  Spade,
}

let a = [];

a.push(5);
a.push("not a number");

let nums: number[] = [1, 2, 3];

class ShoppingCart {
  items: number[] = [];
  constructor() {
    this.items.push(5);
  }
}

const shCart = new ShoppingCart();
console.dir(shCart.items);

let dependency: [string, number];
dependency = ["react", 16];
