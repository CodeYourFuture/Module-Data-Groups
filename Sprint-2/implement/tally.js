function tally(input) {
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

   const counts = Object.create(null); // no prototype
    for (let item of input) {
        counts[item] = (counts[item] || 0) + 1;
    }

    return counts;
}



module.exports = tally;

