function createLookup(pairs) {
    let obj = {};
    for (let pair of pairs) {
      obj[pair[0]] = pair[1]
    }
}

module.exports = createLookup;
