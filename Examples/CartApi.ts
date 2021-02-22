interface CartItem {
  name: string;
  price: number;
  qty: number;
}

class CartApi {
  items: CartItem[] = [];
  add(name: string, price: number, qty: number = 1) {
    this.items.push({ name, price, qty });
    return this;
  }
  addItem(item: CartItem) {
    this.items.push(item);
    return this;
  }

  get length(): number {
    return this.items.reduce((acc, item) => acc + item.qty, 0);
  }
  get total(): number {
    return this.items.reduce((acc, item) => acc + item.qty * item.price, 0);
  }
}
let cart = new CartApi();

cart.add("Apple", 0.99).add("Pear", 1.99, 2).addItem({
  name: "Bananna",
  price: 2.99,
  qty: 3,
});

console.log(`Your total for ${cart.length} items in $${cart.total}`);

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  readonly length: number;
  total: number;
  add(name: string, price: number, qty: number): CartAPI;
  addItem(item: CartItem): CartAPI;
}

export function cashier(): CartAPI {
  let items: CartItem[] = [];
  return {
    get length(): number {
      return items.reduce((acc, cartItem) => acc + cartItem.qty, 0);
    },
    get total(): number {
      return items.reduce(
        (acc, cartItem) => acc + cartItem.qty * cartItem.price,
        0
      );
    },
    addItem(item): CartAPI {
      items.push(item);
      return this;
    },
    add(name: string, price: number, qty: number = 1) {
      items.push({ name, price, qty });
      return this;
    },
  };
}

let cart = cashier();

cart.add("Apple", 0.99).add("Pear", 1.99, 2).addItem({
  name: "Bananna",
  price: 2.99,
  qty: 3,
});

console.log(`Your total for ${cart.length} items in $${cart.total}`);
