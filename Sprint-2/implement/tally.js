function tally(arrayItems) {
  const countItem = {};
  if (!Array.isArray(arrayItems)) {
    throw new Error("tally rquires an input");
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
