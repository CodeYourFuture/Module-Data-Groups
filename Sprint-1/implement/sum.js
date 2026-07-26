function sum(elements) {
  const numbers = elements.filter((item) => typeof item === "number");
  return numbers.reduce((total, current) => total + current, 0);
}

module.exports = sum;
