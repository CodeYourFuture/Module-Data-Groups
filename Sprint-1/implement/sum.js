function sum(arr) {
  return arr
    .filter((item) => typeof item === "number")
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
