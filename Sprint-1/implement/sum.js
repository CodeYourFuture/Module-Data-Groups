function sum(elements) {
  let filterNumber = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );

  let total = filterNumber.reduce((a, b) => a + b, 0);
  return total;
}
// console.log(sum([1, 2, 3, 4, "hello", NaN]));
console.log(sum([Infinity, 1]));

module.exports = sum;
