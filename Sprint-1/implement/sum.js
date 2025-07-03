function sum(arr) {
  return arr.reduce((total, current) => {
    if (typeof current === "number") {
      return total + current;
    }
    return total;
  }, 0);
}

module.exports = sum;
