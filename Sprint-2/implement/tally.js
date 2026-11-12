function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("tally requires an array");
  }
  const objectItem = {};
  for (const item of array) {
    if (objectItem[item]) {
      objectItem[item] = objectItem[item] + 1;
    } else {
      objectItem[item] = 1;
    }
  }
  return objectItem;
}

module.exports = tally;
