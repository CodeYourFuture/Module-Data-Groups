function tally(array) {
    if (!Array.isArray(array)) {
        throw new Error("Invalid input");
    }

    let countedDuplicates = {};
    for (const i of array) {
        countedDuplicates[i] ??= 0;
        countedDuplicates[i] = countedDuplicates[i] + 1;
    }
    return countedDuplicates;
}

module.exports = tally;