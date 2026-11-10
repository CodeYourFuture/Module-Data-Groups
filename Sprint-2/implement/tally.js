function tally(arrayItems) {
  const countItem = {};
  if (arrayItems.length >= 1) {
    countItem[arrayItems[0]] = arrayItems.length;
    return countItem;
  }
  if (arrayItems.length === 0) {
    return countItem;
  }
}

module.exports = tally;
