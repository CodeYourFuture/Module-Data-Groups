function tally(items) {
    if (!Array.isArray(items)) {
        throw new Error("Input must be an array");
      }
    
      let result = {};
    
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        result[item] = (result[item] || 0) + 1;
      }
    
      return result;
    } 



}

module.exports = tally;
