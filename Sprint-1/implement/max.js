function findMax(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array");
    }
    const numericValues = arr.filter(item => typeof item === 'number');
    return numericValues.length > 0 ? Math.max(...numericValues) : -Infinity;
  }
  
  module.exports = findMax;
  