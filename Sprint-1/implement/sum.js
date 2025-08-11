function sum(elements) {
  let filterNumber = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  const factor = 10 ** 10;
  let total = filterNumber.reduce((a, b) => a + b * factor, 0);
  return total / factor;
}
// console.log(sum([1, 2, 3, 4, "hello", NaN]));
console.log(sum([0, NaN, 1]));

module.exports = sum;
