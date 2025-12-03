function findMax(elements) {
    // Filter only numeric values (numbers, not NaN, not null, not undefined)
    const numbers = elements.filter(function(item) {
        return typeof item === 'number' && !isNaN(item);
    });

    // Treat no numbers the same as empty input
    if (numbers.length === 0) {
        return -Infinity;
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
