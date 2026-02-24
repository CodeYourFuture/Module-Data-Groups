function findMax(elements) {
  const filteredElements = elements.filter(
    (x) => typeof x === "number" && !Number.isNaN(x)
  );

  const sortedElements = filteredElements.sort((a, b) => a - b);

  return sortedElements.reduce((a, b) => Math.max(a, b), -Infinity);
}

module.exports = findMax;
