function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
  }
  const listOfItems = Object.create(null);

  for (const item of items) {
    if (listOfItems[item]) {
      listOfItems[item]++;
    } else {
      listOfItems[item] = 1;
    }
  }
  return listOfItems;
}

module.exports = tally;
