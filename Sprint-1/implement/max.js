function findMax(elements) {
  // filter out only numbers to the new array
  const numElements = elements.filter(
    (el) => !isNaN(el) && typeof el === "number"
  );

  return numElements.reduce(
    (acc, curr) => (acc > curr ? acc : curr),
    -Infinity
  );
}

module.exports = findMax;

console.log(findMax([-10, 20, 0, 100, 1]));
console.log(findMax([]));
console.log(findMax(["I", 2, "am", -1000, "Lord", "200", "Voldemort", 10]));
