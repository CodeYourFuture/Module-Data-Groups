function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  return elements
    .filter((val) => typeof val === "number" && !isNaN(val))
    .reduce((acc, val) => acc + val, 0);
}

module.exports = sum;
