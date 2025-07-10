function findMax(elements) {
  let onlyNumbers = elements.filter((el) => typeof el === "number");
  return onlyNumbers.length > 0 ? Math.max(...onlyNumbers) : -Infinity;
}
console.log(findMax([1.5, "text", 2.3, null, 0.8]));

module.exports = findMax;
