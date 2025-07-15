function contains(object, property) {
    const keysArray = Object.keys(object); // Converts object keys to an array
  
    for (let i = 0; i < keysArray.length; i++) {
      if (keysArray[i] === property) {
        return true;
      }
    }
  
    return false; // Property wasn't found
  }

module.exports = contains;
