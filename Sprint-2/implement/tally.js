function tally(list) {
  const itemFrequencyCount = {};

  for (const item of list) {
    if (Object.hasOwn(itemFrequencyCount, item)) {
      itemFrequencyCount[item] = itemFrequencyCount[item] + 1;
    } else {
      itemFrequencyCount[item] = 1;
    }
  }
  return itemFrequencyCount;
}

module.exports = tally;
