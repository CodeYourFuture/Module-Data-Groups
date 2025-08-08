function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  
  return elements
    .filter(element => typeof element === 'number')
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
