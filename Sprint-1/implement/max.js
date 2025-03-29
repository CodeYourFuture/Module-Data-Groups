function findMax(elements) {
    if (!elements || elements.length === 0) {
      return -Infinity;
    }
  
    let max = -Infinity;
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === 'number' && elements[i] > max) {
        max = elements[i];
      }
    }
    return max;
  }
  
  module.exports = findMax;