function findMax(elements) {

const numericElements = elements.map(Number).filter(n=> !Number.isNaN(n));

if (numericElements.length === 0) {
    return -Infinity;
}

const max = numericElements.reduce((a, b) => Math.max(a, b), -Infinity);
return max;


module.exports = findMax;
