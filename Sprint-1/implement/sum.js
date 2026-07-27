function sum(elements) {
  const numbers = elements.filter((item) => typeof item === "number" && !Number.isNaN(item));

  return numbers.reduce((total, current) => total + current, 0);
}

module.exports = sum;
