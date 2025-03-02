// findMax.js
function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  const validNumbers = elements.filter((item) => typeof item === "number");

  if (validNumbers.length === 0) {
    return -Infinity;
  }

  return Math.max(...validNumbers);
}

module.exports = findMax;
