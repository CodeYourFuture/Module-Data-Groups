function findMax(arr) {
  // filter only numbers from the array
  const numbers = arr.filter(item => Number.isFinite(item));
  return Math.max(...numbers);
}

module.exports = findMax;
