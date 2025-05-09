function findMax(elements) {
    // Filter the array to include only numbers (excluding NaN to be sure that is only number)
   const numericElements = elements.filter((item) => typeof item === "number" && !isNaN(item));

   // Use reduce method is used to find the maximum element in a numeric array, by comparing each value:
   // by Math.max method and it is empty will return -Infinity
   // result will store in maxNum variable and return
    let maxNum = numericElements.reduce((a, b) => Math.max(a, b), -Infinity);
    return maxNum;
}

module.exports = findMax;
