function findMax(elements) {
  let max = -Infinity;
  for (const value of elements) {
    if (typeof value === "number" && !Number.isNaN(value)) {
      if (value > max) {
        max = value;
      }
    }
  }
  return max;
}
console.log(findMax([])); // -Infinity
console.log(findMax([42])); // 42
console.log(findMax([-10, 20, -5, 7])); // 20
console.log(findMax([-50, -3, -100])); // -3
console.log(findMax([1.5, 3.2, 2.8])); // 3.2
console.log(findMax(["hey", 10, "hi", 60, 10])); // 60
console.log(findMax(["a", {}, null])); // -Infinity

module.exports = findMax;
