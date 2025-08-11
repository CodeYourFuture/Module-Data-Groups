function contains(obj, key) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return false; // Return false if the parameter is not an object
    }
    
    return obj.hasOwnProperty(key); // Checks if the object has the specified key
  }
  
  module.exports = contains;
  