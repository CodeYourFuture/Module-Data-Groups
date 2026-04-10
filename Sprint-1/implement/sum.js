function sum(arr) {
  return arr
    .filter(item => Number.isFinite(item))
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
