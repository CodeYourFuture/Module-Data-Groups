function createLookup(array, keyField = "id") {
  if (!Array.isArray(array)) return {};

  const lookup = {};
  for (const item of array) {
    if (item && item[keyField] !== undefined) {
      lookup[item[keyField]] = item;
    }
  }

  return lookup;
}

module.exports = createLookup;
