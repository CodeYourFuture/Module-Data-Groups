function sum(elements) {
  return elements.reduce((acc, curr) => {
    if (typeof curr !== "number") {
      return acc;
    }
    return acc + curr;
  }, 0);
}

module.exports = sum;
