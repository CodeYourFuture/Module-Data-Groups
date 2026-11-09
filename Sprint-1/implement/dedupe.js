function dedupe(array) {
    return (array.length === 0) ? [] : [...new Set(array)]
}

module.exports = dedupe; 