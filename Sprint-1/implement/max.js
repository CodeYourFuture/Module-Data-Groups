function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  const numbers = elements
    .filter((val) => typeof val === "number")
    .sort((a, b) => a - b);

  return Math.max(...numbers);
}

module.exports = findMax;
