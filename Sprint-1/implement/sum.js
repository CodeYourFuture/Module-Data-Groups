function sum(elements) {
  // Filter to only numeric values,
  // then reduce to a total
  return elements
    .filter((x) => typeof x === "number" && isFinite(x))
    .reduce((total, x) => total + x, 0);
}

module.exports = sum;
