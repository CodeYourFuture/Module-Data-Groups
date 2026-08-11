function tally(array) {
  if (typeof array === "string") {
    throw new Error("Input should be an array");
  }

  let tallySet = {};

  for (let item of array) {
    if (!tallySet[item]) {
      tallySet[item] = 1;
    } else {
      tallySet[item] += 1;
    }
  }
  return tallySet;
}

module.exports = tally;
