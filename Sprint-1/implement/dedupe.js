function dedupe(arr) {
    if(!arr.length) return [];
    const result = [];
    arr.forEach(item => {
        if(!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

module.exports = dedupe;