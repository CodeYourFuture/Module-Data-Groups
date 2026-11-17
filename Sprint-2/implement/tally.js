function tally(talliedItems) {
  if (!Array.isArray(talliedItems)) {
    throw new Error("tally requires an array");
  }

  const tallyList = {};

  for (const item of talliedItems) {
    if (tallyList[item]) {
      tallyList[item] += 1;
    } else {
      tallyList[item] = 1;
    }
  }

  return tallyList;
}

module.exports = tally;
