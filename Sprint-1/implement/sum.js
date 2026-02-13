function sum(elements) {
  if (!Array.isArray(elements)) return 0;
  return elements.reduce((acc, curr) => {
    return Number.isFinite(curr) ? acc + curr : acc;
  }, 0);
}

module.exports = sum;
