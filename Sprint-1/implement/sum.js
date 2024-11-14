function sum(elements) {
  // Filter out non-numeric values and sum the remaining numbers
  return elements
    .filter(element => typeof element === 'number')
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
