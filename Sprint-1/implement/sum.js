function sum(elements) {
  return elements.reduce((acc, curr) => {
    if (typeof curr !== "number" || isNaN(curr)) {
      return acc;
    }
    return acc + curr;
  }, 0);
}

module.exports = sum;
