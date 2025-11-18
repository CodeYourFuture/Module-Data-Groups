function sum(elements) {
  // If input is not an array, return 0 (least surprising behaviour)
  if (!Array.isArray(elements)) return 0;

  // Sum only numeric values
  return elements.reduce((total, item) => {
    return typeof item === "number" ? total + item : total;
  }, 0);
}

module.exports = sum;
