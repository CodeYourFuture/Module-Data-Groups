function sum(elements) {
}
const numericElements = elements.map(Number).filter(n=> !Number.isNaN(n));// Convert elements to numbers and filter out non-numeric values

const total = numericElements.reduce((acc, curr) => acc + curr, 0);// Use reduce to sum the numeric elements, starting with 0 as the initial value
return total;
module.exports = sum;
