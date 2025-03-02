function sum(elements) {
    // Filter out non-numeric values (excluding NaN)
    const numericalArray = elements.filter(item => typeof item === 'number' && !isNaN(item));
    
    // If no valid numbers, return 0
    if (numericalArray.length === 0) {
        return 0;
    }
    
    // Sum all the numbers in the array
    return numericalArray.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sum;
