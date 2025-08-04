function sum(elements) {
  let sortedElements = elements.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );
  if (sortedElements.length === 0 && elements.length > 0) {
    return NaN;
  }
  let total = 0;
  for (let i = 0; i < sortedElements.length; i++) {
    total += sortedElements[i];
  }
  return Number(total.toFixed(4));
}

module.exports = sum;
