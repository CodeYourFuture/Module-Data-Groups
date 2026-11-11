function tally(arr) {
  const tallyObj = {};
  if (!Array.isArray(arr)) {
    throw new Error("tally requires an array");
  }
  if (arr.length === 0) {
    return {};
  }
  let key;
  let value;
  for (const item of arr) {
    if (tallyObj[item]) {
      tallyObj[item] = tallyObj[item] + 1;
    } else {
      tallyObj[item] = 1;
    }
  }
  return tallyObj;
}

module.exports = tally;
