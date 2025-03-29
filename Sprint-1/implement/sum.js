function sum(elements) {
}

module.exports = sum;
function sum(elements) {
    // Use reduce to sum up the elements, ignoring non-numeric values
    return elements.reduce((acc, curr) => {
      // Add only numeric values
      if (typeof curr === 'number') {
        return acc + curr;
      }
      return acc;
    }, 0);
  }
  
  module.exports = sum;
  