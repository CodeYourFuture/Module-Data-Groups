function contains(obj, key) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
      return false; // Return false for invalid objects
    }
  
    return obj.hasOwnProperty(key);
  }
  
  module.exports = contains;
  