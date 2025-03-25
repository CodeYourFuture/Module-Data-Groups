function sum(elements) {
  const numericalValues = elements.filter(element => typeof element === 'number' && !isNaN(element));
  return numericalValues.reduce((total, current) => total + current, 0);
}

module.exports = sum;
