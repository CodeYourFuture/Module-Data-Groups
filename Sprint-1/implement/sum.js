function sum(arr) {
  return arr
    .filter(item => typeof item === "number") // keep only numbers
    .reduce((acc, curr) => acc + curr, 0);    // sum them up starting from 0
}

module.exports = sum;
