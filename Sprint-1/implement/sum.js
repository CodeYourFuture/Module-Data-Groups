function sum(elements) {
  let numericValues = elements.filter(function (item) {
    return typeof item === "number";
  });
  let sum = 0;
  for (let i = 0; i < numericValues.length; i++) {
    sum = sum + numericValues[i];
  }
  return sum;
}

console.log("sum of elements =", sum(["hello"]));

module.exports = sum;
