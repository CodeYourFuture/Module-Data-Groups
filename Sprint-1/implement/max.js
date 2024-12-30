/*
function findMax(elements) {
}

module.exports = findMax;
*/
// ______________________________________SOLUTION__________________________________________________

function findMax(elements) {
    // THe use of Filter remove elements that are not numbers.
    const numericElements = elements.filter((el) => typeof el === "number");
    
    // and If the array is empty or contains no numbers, it return -Infinity.

    return numericElements.length > 0 ? Math.max(...numericElements) : -Infinity;  //  Math.max on the filtered array will help to find the maximum value.
  }
  
  module.exports = findMax;