function contains(input, value) {
    if (
      input === null ||                          // explicitly reject null
      typeof input !== 'object' || 
      Array.isArray(input) || 
      value === undefined || value === null      // allow empty string
    ) {
      return false;
    }
  
    const valueExists = Object.values(input).includes(value);
    const keyExists = Object.hasOwn(input, value);
  
    return valueExists || keyExists;
  }
  
  
module.exports = contains;

