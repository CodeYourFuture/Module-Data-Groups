function sum(elements) {
    // Filter for numerical elements and sum them
    return elements
      .filter((element) => typeof element === "number")
      .reduce((acc, num) => acc + num, 0); // Start with 0 as the initial sum
  }
  
  module.exports = sum;
  