function sum(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input must be an array");
    }
    return arr.reduce((total, item) => (typeof item === "number" ? total + item : total), 0);
  }
  
  module.exports = sum;
  
