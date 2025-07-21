function contains(obj, key) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return false; // invalid input — not a plain object
    }
  
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  
  module.exports = contains;
  
