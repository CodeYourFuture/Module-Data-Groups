function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const plainObject = Object.create(null);

  const itemsObject = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, plainObject);

  return itemsObject;
}

module.exports = tally;
