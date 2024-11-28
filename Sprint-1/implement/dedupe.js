function dedupe(array) {
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
  
    const seen = new Set();
    return array.filter((item) => {
      if (seen.has(item)) {
        return false;
      }
      seen.add(item);
      return true;
    });
  }
  
  module.exports = dedupe;