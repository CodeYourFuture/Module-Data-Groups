function tally(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    const counts = Object.create(null);
    for (const item of arr) {
        if (counts[item] === undefined) {
            counts[item] = 1;
        } else {
            counts[item] = counts[item] + 1;
        }
    }
    return counts;
}

module.exports = tally;
