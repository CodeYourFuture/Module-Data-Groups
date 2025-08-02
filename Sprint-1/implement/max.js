function findMax(elements) {
  const filteredValue = elements.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );

  if (filteredValue.length === 0 && elements.length > 0) {
    return NaN;
  }

  return Math.max(...filteredValue);
}
console.log(findMax(["hello", "hi", "me"]));
module.exports = findMax;
