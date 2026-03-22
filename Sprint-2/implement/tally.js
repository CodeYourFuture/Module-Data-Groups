

function tally(arr) {
    // Input validation

    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    // The reduction method effectively builds the frequency map
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}


module.exports = tally;
