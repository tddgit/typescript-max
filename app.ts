function add(n1: number, n2: number) {
  if (typeof n1 !== "number") {
    throw new Error("Incorrect type");
  }

  console.log(typeof n1);
  return n1 + n2;
}

console.log(add(56, 45));
console.log("result");
