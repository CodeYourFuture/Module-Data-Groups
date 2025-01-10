function sum(elements) {
    // Filter the array to include only numbers (excluding NaN to be sure that is only number)
   const numericElements = elements.filter((item) => typeof item === "number" && !isNaN(item));

   // Use reduce method is used to find the sum element in a numeric array, one by one
   //Multiplying by a large factor (e.g., 1e12) turns decimal numbers into integers:
   // and if the array is empty will return 0
   // result will store in totalSum variable and return
   const scale = 1e12;
    let totalSum = numericElements.reduce((a, b) => (a * scale + b * scale) / scale, 0);
    
    return parseFloat(totalSum);
}

module.exports = sum;
