function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    // Use Object.create(null) as the initial value (the accumulator)
    // This creates an object with NO inherited properties like toString
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, Object.create(null));
}

module.exports = tally;