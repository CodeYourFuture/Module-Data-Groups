function tally(array) {
    console.log(!Array.isArray(array));
    if (!Array.isArray(array)) {
        throw new Error('Invalid input.');
    }
    let countObject = {};
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        if (countObject.hasOwnProperty(array[i])) {
            continue;
        }
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                sum++;
            }
        }
        countObject[array[i]] = sum;
    }
    return countObject;
}

module.exports = tally;
