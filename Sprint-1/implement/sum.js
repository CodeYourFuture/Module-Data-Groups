// function sum(elements) {
// }

// module.exports = sum;

/*
  I implemented a function called sum that takes an array and returns 
  the total of all numeric values. I made sure to filter out any non-numeric 
  elements like strings or nulls. 

  I understand that:
  - If the array is empty or has no numbers, it should return 0.
  - It needs to handle negative numbers and decimal numbers correctly.
  - Non-number values should be ignored to prevent errors or incorrect totals.
*/

function sum(elements) {
    if (!Array.isArray(elements)) return 0;
  
    return elements
      .filter((el) => typeof el === "number")
      .reduce((total, num) => total + num, 0);
  }
  
  module.exports = sum;


