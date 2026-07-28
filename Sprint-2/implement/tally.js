function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input");
  }
  const itemsObj = {};
  for (const item of items) {
    if (item === undefined || item === null) continue;
    if (itemsObj[item] === undefined) {
      itemsObj[item] = 1;
    } else itemsObj[item]++;
  }
  return itemsObj;
}

module.exports = tally;
