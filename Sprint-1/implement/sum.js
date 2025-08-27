function sum(elements) {
  if (!Array.isArray(elements)) return 0;

  return elements.reduce((acc, val) => {
    return typeof val === "number" && !isNaN(val) ? acc + val : acc;
  }, 0);
}

module.exports = sum;