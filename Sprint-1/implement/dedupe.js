function dedupe(a) {
    return (a.length === 0) ? [] : [...new Set(a)]
}

module.exports = dedupe; 