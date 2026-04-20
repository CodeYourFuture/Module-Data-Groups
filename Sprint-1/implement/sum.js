function sum(arr) {
    if (!Array.isArray(arr)) return 0;

    return arr.reduce((accumulator, currentValue) => {
        // We want to skip booleans, null, and empty/whitespace strings 
        // as Number() would coerce them into 0 or 1.
        if (typeof currentValue === 'boolean' || currentValue === null ||
            (typeof currentValue === 'string' && currentValue.trim() === "")) {
            return accumulator;
        }

        const numericValue = Number(currentValue);

        // Check if the result is a valid number and not NaN
        if (!Number.isNaN(numericValue)) {
            return accumulator + numericValue;
        }

        return accumulator;
    }, 0);
}

module.exports = sum;