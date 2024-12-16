function sum(elements) {
  numericalElements = elements.filter((el) => typeof el === "number");
  return numericalElements.length > 0
    ? numericalElements.reduce((a, c) => a + c, 0)
    : 0;
}

module.exports = sum;

console.log(sum(["hey", 10, "hi", 60, 10])); // 80
console.log(sum([])); // 0
