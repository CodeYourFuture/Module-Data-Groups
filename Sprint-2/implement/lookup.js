function createLookup(obj) {
  const cur = {};
  for (let list of obj) {
    for (let country = 0; country < list.length; country++) {
      cur[list[0]] = list[1];
    }
  }
  return cur
}

module.exports = createLookup;
