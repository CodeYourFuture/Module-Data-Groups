function sum(arr) {
  if (!Array.isArray(arr)) return 0;

  return arr.reduce((total, item) => {
    return typeof item === "number" ? total + item : total;
  }, 0);
}

module.exports = sum;

