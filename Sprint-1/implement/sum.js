function sum(elements) {
  if (!elements.every((element) => typeof element === "number")) {
    throw new Error("sum requires an array of numbers");
  }
  const sum = elements.reduce((sum, number) => {
    return number + sum;
  }, 0);
  return sum;
}
module.exports = sum;
