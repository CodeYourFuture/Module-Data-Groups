/**
 * find the largest numerical element of an array.
 */

function findMax(elements) {
    // Function will return '-Infinity', If the array is empty or has only non numeric value.
    // If the array has only one element, function will return that element as the largest value.
    // If the array has only negative value, function will return the closest number to zero.
    // Otherwise, function will return the largest value.
    const numbersOnly = elements.filter(element => Number.isFinite(element));
    return  Math.max(...numbersOnly);

}

module.exports = findMax;
