function findMax(elements) {
  const numbers = elements.filter((item) => typeof item === "number");
  return Math.max(...numbers);
}

module.exports = findMax;
