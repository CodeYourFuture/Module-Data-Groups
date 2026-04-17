
function sum(arr) {
    if (!Array.isArray(arr)) return 0;

    return arr.reduce((accumulator, currentValue) => {
        // 1. Convert the value to a Number (handles strings like "10")
        const numericValue = Number(currentValue);

        // 2. Check if the result is a valid number and not NaN
        // Note: Number.isNaN is stricter/safer than the global isNaN
        if (!Number.isNaN(numericValue) && typeof currentValue !== 'boolean' && currentValue !== null) {
            return accumulator + numericValue;
        }

        return accumulator;
    }, 0);
}

module.exports = sum;