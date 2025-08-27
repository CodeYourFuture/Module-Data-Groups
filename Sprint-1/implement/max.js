function findMax(elements) {
  const numbers = elements.filter(element => typeof element === 'number');
  
  if (numbers.length === 0) {
    return -Infinity;
  }
  
  return Math.max(...numbers);
}

module.exports = findMax;
