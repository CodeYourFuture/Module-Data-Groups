function sum(elements) {
  if (!Array.isArray(elements)) {
    return 0;
  }

  // Filter only numeric values
  const numbers = elements.filter(function (item) {
    return typeof item === "number" && !isNaN(item);
  });

  // If no numeric values, return 0
  if (numbers.length === 0) {
    return 0;
  }

  // Add the numbers
  return numbers.reduce(function (total, value) {
    return total + value;
  }, 0);
}

module.exports = sum;
