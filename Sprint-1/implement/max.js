function findMax(elements) {
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  const numbers = elements.filter(
    (element) => typeof element === "number" && !Number.isNaN(element)
  );
  return numbers.length === 0 ? -Infinity : Math.max(...numbers);
}

module.exports = findMax;
