function tally(itemList) {
  if (!Array.isArray(itemList)) {
    throw new Error("tally requires an array");
  }
  const talliedItems = {};
  for (const item of itemList) {
    if (!Object.keys(talliedItems).includes(item)) {
      talliedItems[item] = 1;
    } else {
      talliedItems[item] += 1;
    }
  }
  return talliedItems;
}

module.exports = tally;
