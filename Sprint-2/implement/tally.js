function tally(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('Input must be an array');
    }

    const tallyResult = Object.create(null);

    for (const item of items) {
        if (tallyResult[item] === undefined) {
            tallyResult[item] = 1;
        } else {
            tallyResult[item]++;
        }
    }

    return tallyResult;
}

module.exports = tally;

console.log("Test : tally with 'toString':");
console.log(tally(["toString", "toString"]));