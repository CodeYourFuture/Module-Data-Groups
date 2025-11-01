function tally(arr) {
    if (!Array.isArray(arr) || arguments.length !== 1) {
        throw new Error("Input must be an array");
    }
    const result = {};
    for (const item of arr) {
        result[item] = (result[item] || 0) + 1;
    }
    return result;
}

module.exports = tally;
