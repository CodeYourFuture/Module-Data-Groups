function dedupe(arr) {
    return [...new Set(arr)];
  }
  
  console.log(dedupe([1, 2, 2, 3, 4, 4, 5])); 
  
  module.exports = dedupe;// [1, 2, 3, 4, 5]
  
