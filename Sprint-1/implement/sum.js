/*
function sum(elements) {
}

module.exports = sum;
*/

// ____________________________SOLUTION OR IMPLEMENTATION OF SUM __________________________________

function sum(elements) {
    // I am using Array.prototype.filter to isolate numbers from the array.
    // and Array.prototype.reduce to calculate the total sum of the numeric elements.

    return elements
      .filter((el) => typeof el === "number")
      .reduce((total, num) => total + num, 0);   // An empty array should return 0.
  }
  
  module.exports = sum;