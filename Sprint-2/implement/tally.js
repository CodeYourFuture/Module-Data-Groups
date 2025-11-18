function tally(arr) {
    if (!Array.isArray(arr)) {// if it is not array (string or number throw an error message
        throw new TypeError("Input must be an array");
    }

    return arr.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;// loops through the array and count 
        return counts;
    }, {});
}

module.exports = tally;
