function findMax(elements) {
    // Filter only numeric values (numbers, not NaN, not null, not undefined)
    const numbers = elements.filter(function(item) {
        return typeof item === 'number' && !isNaN(item);
    });

    //  Check if any numbers exist, Given an empty array, it should return -Infinity
    if (numbers.length === 0) {
        if (elements.length === 0) {
            return -Infinity;
        } else {
            return null;
        }
    }

    // Find the maximum number
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
return max;
}
    
module.exports = findMax;
