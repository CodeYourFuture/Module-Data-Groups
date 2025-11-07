function tally(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

   const counts = {};
    for (let item of input) {
        counts[item] = (counts[item] || 0) + 1;
    }

    return counts;
}

module.exports = tally;
