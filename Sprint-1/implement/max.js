function findMax(elements) {
  const numbers = elements.filter(n => typeof n === "number");
  return Math.max(...numbers);
}

module.exports = findMax;
