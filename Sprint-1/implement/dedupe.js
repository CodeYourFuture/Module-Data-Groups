function dedupe(array) {
    let deduplicatedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!deduplicatedArray.includes(array[i])) {
            deduplicatedArray.push(array[i]);
        }
    }
    return deduplicatedArray;
}

module.exports = dedupe