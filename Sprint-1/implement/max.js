function findMax(elements) {

const numericElements = elements.map(Number).filter(n=> !Number.isNaN(n));// Convert elements to numbers and filter out non-numeric values

if (numericElements.length === 0) {// If there are no numeric elements, return -Infinity
    return -Infinity;
}

const max = numericElements.reduce((a, b) => Math.max(a, b), -Infinity);// Use reduce to find the maximum value, starting with -Infinity as the initial value
return max;


module.exports = findMax;
