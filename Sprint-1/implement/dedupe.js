function dedupe(array) {
  let seen = new Set();
  let result = [];
    for (let item of array) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}

module.exports = dedupe;
