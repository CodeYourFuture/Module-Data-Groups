function sum(elements) {
  return elements
    .filter((el) => typeof el === "number")
    .reduce((sum, num) => sum + num, 0);
}
module.exports = sum;
