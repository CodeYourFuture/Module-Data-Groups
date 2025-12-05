function sum(elements) {
  const total = elements
    .filter((val) => typeof val === "number")
    // Returns initial value(0) for empty arrays
    .reduce((total, current) => total + current, 0);

  return total;
}

module.exports = sum;
