function findMax(arr) {
  const numbers = arr.filter(item => typeof item === 'number');
  return Math.max(...numbers);
}

module.exports = findMax;
