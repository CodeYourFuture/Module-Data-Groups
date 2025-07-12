function findMax(arr) {
  const numbersOnly = arr.filter((item) => typeof item === "number");
  return Math.max(...numbersOnly);
}

module.exports = findMax;
