function findMax(elements) {
  const numbers = elements.filter(n => typeof n === "number");
  return numbers.length === 0 ? -Infinity : Math.max(...numbers);
}

module.exports = findMax;
