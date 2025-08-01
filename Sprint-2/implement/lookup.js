function createLookup(obj) {
  if (!Array.isArray(obj) || !obj.every(Array.isArray)) {
    throw new Error("Input must be an array of arrays");
  }
  const cur = {};
  for (let list of obj) {
      cur[list[0]] = list[1];
  }
  return cur;
}

module.exports = createLookup;
