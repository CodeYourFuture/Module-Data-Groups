function contains(obj, property) {
    // Check if obj is a valid object and not null
    if (typeof obj !== "object" || obj === null) {
      return false; // or throw an error
    }
  
    // Use hasOwnProperty to check if the property exists
    return obj.hasOwnProperty(property);
  }
module.exports = contains;
