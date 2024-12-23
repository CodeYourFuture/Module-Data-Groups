function sum(elements) {
    if (!Array.isArray(elements)) {
        throw new TypeError("Input must be an array.");
      }
    
      let total = 0;
    
      for (let h = 0; h < elements.length; h++) {
        const current = elements[h];
        if (typeof current == 'number') {
          total += current;
        }
      }
    
      return total;
}

module.exports = sum;
