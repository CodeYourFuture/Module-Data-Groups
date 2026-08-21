function sum(elements) {
  if (!Array.isArray(list)) return 0;

  return list.reduce((total, item) => {
    // Only sum primitive numbers, excluding NaN
    if (typeof item === "number" && !isNaN(item)) {
      return total + item;
    }
    return total;
  }, 0);
}

module.exports = sum;
