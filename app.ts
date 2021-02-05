function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
    return result;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return parseInt(result);
  } else {
    return result.toString();
  }
}

let combineedAges = combine(30, 26, "as-number");
let combineedAges1 = combine(30, 26, "as-string");
console.log(combineedAges, combineedAges1);
