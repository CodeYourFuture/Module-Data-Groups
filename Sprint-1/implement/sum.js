function sum(elements) {
  // Filter out only numeric values
  const numbers = elements.filter(
    (item) => typeof item === "number" && Number.isFinite(item)
  );

  // Sum all numbers using reduce
  return numbers.reduce((total, num) => total + num, 0);
}

module.exports = sum;
