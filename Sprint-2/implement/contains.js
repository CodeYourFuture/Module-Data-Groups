function contains(obj, property) {
    
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, property);
  }
  
  module.exports = contains;
  