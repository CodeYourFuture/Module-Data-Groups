function sum(elements) {
  if (!Array.isArray(elements)) return 0;
  return elements.reduce((acc, curr) => {
    return typeof curr === "number" ? acc + curr : acc;
  }, 0);
}

module.exports = sum;
console.log(sum([]));
