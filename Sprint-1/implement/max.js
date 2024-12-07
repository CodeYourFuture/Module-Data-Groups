function findMax(elements) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Input must be an array.");
      }
    
      let max = -Infinity;
    
      for (let h = 0; h < elements.length; h++) {
        const current = elements[h];
        if (typeof current === 'number' && current > max) {
          max = current;
        }
      }
    
      return max;
}

module.exports = findMax;
