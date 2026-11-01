function sum(elements) {
  for (const num of elements) {
    if (typeof num !== "number") {
      throw new Error("sum requires an array of numbers");
    }
  }
  let total = 0;
  for (const num of elements) {
    total += num;
  }
  return total;
}

module.exports = sum;
