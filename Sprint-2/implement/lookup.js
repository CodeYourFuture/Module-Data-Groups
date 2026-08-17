function createLookup(pairs) {
    let obj = {};
    for (let pair of pairs) {
      obj[pair[0]] = pair[1]
    }
    return obj;
}

module.exports = createLookup;
