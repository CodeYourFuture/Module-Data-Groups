// implement/lookup.js
function createLookup(items, keySelector, valueSelector) {
  if (!Array.isArray(items)) {
    return {};
  }

  if (typeof keySelector !== 'function' || typeof valueSelector !== 'function') {
    throw new Error('keySelector and valueSelector must be functions');
  }

  const lookup = {};

  for (const item of items) {
    const key = keySelector(item);
    const value = valueSelector(item);

    if (key !== undefined) {
      lookup[key] = value;
    }
  }

  return lookup;
}

module.exports = createLookup;