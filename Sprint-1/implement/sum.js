sum.js
function sum(arr) {
    return arr.reduce((accumulator, currentValue) => {
        if (typeof currentValue === 'number' && !isNaN(currentValue)) {  // investigate  if the current element is a number and not NaN
            return accumulator + currentValue;
        }
        return accumulator;  // If not a number, return current sum
    }, 0); // This line initialize sum at 0 for  empty arrays
}

module.exports = sum;
