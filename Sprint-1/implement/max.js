//function findMax(elements) {
//}

//module.exports = findMax;
function findMax(elements) {
    // Return undefined if the array is empty
    if (elements.length === 0) {
      return undefined;
    }
  
    // Use Math.max to find the largest number in the array
    return Math.max(...elements);
  }
  
  module.exports = findMax;
  