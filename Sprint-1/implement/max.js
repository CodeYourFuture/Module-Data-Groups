function findMax(elements) {
    const filteredArr = elements.filter(x => typeof x === 'number');

    if (filteredArr.length == 0) {
        return -Infinity;
    }

    // using 'spread sytax'
    return Math.max(...filteredArr);
}

module.exports = findMax;
