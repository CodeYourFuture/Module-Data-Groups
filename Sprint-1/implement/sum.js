function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  if (elements.includes(NaN)) {
    throw new Error("sum requires an array of numbers");
  }
  if (elements.length === 0) {
    return 0;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  let total = 0;
  for (const item of elements) {
    total += item;
  }
  return total;
}

module.exports = sum;
