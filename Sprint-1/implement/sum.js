function sum(elements) {
  const numbers = elements.filter((item) => typeof item === "number");
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((total, num) => total + num, 0);
}

module.exports = sum;
