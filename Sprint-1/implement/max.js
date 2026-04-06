function findMax(elements) {
  const numbersOnly = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );

  if (numbersOnly.length === 0) {
    return -Infinity;
  }

  return Math.max(...numbersOnly);
}

module.exports = findMax;
