function sum(elements) {
  // Filter out non-numeric values and convert to numbers
  const numbers = elements
    .filter((item) => typeof item === "number")
    .map(Number);

  // Sum all numbers using reduce
  return numbers.reduce((total, num) => total + num, 0);
}

module.exports = sum;
