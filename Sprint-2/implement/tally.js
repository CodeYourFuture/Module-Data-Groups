function tally(arrayItems) {
  const countItem = {};

  if (arrayItems.length === 0) {
    return countItem;
  }

  if (arrayItems.length === 1) {
    countItem[arrayItems[0]] = arrayItems.length;
    return countItem;
  }
  for (const item of arrayItems) {
    if (countItem[item]) {
      countItem[item] += 1;
    } else {
      countItem[item] = 1;
    }
  }
  return countItem;
}
module.exports = tally;
