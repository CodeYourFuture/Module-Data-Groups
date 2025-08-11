function tally(items) {
    if (!Array.isArray(items)) {
      throw new Error("Input must be an array");
    }
  
    const result = {};
    for (const item of items) {
      result[item] = (result[item] || 0) + 1;
    }
    return result;
  }
  
  module.exports = tally;
  