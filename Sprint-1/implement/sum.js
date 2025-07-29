function sum(elements) {
  // Filter for numbers only
  const numericValues = elements.filter((item) => typeof item === "number");

  // Add the  numbers
  return numericValues.reduce((total, num) => total + num, 0);
}

module.exports = sum;
