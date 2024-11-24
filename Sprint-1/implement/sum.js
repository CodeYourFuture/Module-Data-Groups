function sum(elements) {
  const numericElements = elements.filter((el) => typeof el === 'number');
  return numericElements.reduce((total, num) => total + num, 0);
}

module.exports = sum;
