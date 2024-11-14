function sum(elements) {
  // If the array is empty, return 0
  if (!elements || elements.length === 0) {
    return 0;
  }

  // Filter the array to only include numeric values and sum them
  return elements
    .filter((el) => typeof el === "number" && !isNaN(el))
    .reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
