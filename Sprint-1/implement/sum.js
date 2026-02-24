function sum(elements) {
  const filteredElements = elements.filter(
    (x) => typeof x === "number" && !Number.isNaN(x)
  );

  if (filteredElements.length === 0) {
    return 0;
  }
  return filteredElements.reduce((a, b) => a + b);
}
console.log(sum([0]));

module.exports = sum;
