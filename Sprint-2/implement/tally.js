function tally(listOfItems) {
  console.log(typeof listOfItems)
  if (typeof listOfItems !== 'object') throw new Error('Not a valid input')
  const itemsCount = {};
  for (const item of listOfItems) {
    itemsCount[item] ? (itemsCount[item] += 1) : (itemsCount[item] = 1);
  }
  return itemsCount;
}

module.exports = tally;
