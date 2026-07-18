function findMax(elements) {
  const numbers = elements.filter(
    (element) => typeof element === "number" && !Number.isNaN(element)
  );

  return Math.max(...numbers);
}

module.exports = findMax;
