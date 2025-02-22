function findMax(elements) {
  let maxNumber = -Infinity;
  for (let i of elements) {
    if (typeof i === "number" && !isNaN(i) && i > maxNumber) {
      maxNumber = i;
    }
  }
  return maxNumber;
}
console.log(findMax([30, 50, 10, "string", 40]));
console.log(findMax(["number", 8, "string", 9]));
console.log(findMax([]));
module.exports = findMax;
