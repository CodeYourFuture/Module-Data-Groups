function sum(elements) {
    // Filter the array to include only numbers and calculate the sum
    return elements
      .filter(item => typeof item === 'number')
      .reduce((acc, num) => acc + num, 0);
  }
  
  module.exports = sum;
  