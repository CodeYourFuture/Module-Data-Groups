function sum(elements) {
  return (
    elements
      .filter((val) => typeof val === "number")
      // Returns initial value(0) for empty arrays
      .reduce((total, current) => total + current, 0)
  );
}

module.exports = sum;
