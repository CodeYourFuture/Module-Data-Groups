function findMax(elements) {
  const numericValues = elements.filter(
    (element) => typeof element === "number"
  );
  if (numericValues.length === 0) {
    return -Infinity; // Return -Infinity if no numeric values are found
  }
  return Math.max(...numericValues);
}
// This function filters the input array to include only numeric values and then uses Math.max to find
// the maximum value among them. If there are no numeric values, it returns -Infinity as

module.exports = findMax;
