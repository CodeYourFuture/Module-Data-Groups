function sum(elements) {
    // Filter the array to include only numbers (excluding NaN to be sure that is only number)
   const numericElements = elements.filter((item) => typeof item === "number" && !isNaN(item));

   // Use reduce method is used to find the sum element in a numeric array, one by one:
   // and if the array is empty will return 0
   // result will store in totalSum variable and return
    let totalSum = numericElements.reduce((a, b) => (a + b), 0);
    
    return totalSum;
}

module.exports = sum;
