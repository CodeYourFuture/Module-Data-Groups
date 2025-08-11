function tally(array) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid input.');
    }
    let countObject = {};
    for (let i = 0; i < array.length; i++) {
        if (!countObject.hasOwnProperty(array[i])) {
            //if item not a property yet, it must be created with value 1 (occurrences)
            countObject[array[i]] = 1;
        } else {
            //if item already a property its value incremented
            countObject[array[i]] += 1;
        }
    }
    return countObject;
}

module.exports = tally;
