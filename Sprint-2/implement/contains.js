function contains() {
        if (typeof obj !== 'object' || obj === null) {
          // Return false for invalid parameters
          return false;
        }
        
        return prop in obj;
      
      
}

module.exports = contains;
