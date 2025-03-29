function sum(elements) {
    if (!Array.isArray(elements)) {
      return 0; // Handle cases where input is not an array
    }
    let total = 0;
    for (let i = 0; i < elements.length; i++) {
      if (typeof elements[i] === 'number') {
        total += elements[i];
      }
    }
    return total;
  }
  
  module.exports = sum;