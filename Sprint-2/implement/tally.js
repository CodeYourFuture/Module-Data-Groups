function tally(arrayElements) {
  if (typeof arrayElements !== "object") throw new Error("Invalid input");
  const tallyObject = {};
  for (const item of arrayElements) {
    if (tallyObject[item]) {
      tallyObject[item] += 1;
    } else {
      tallyObject[item] = 1;
    }
  }
  return tallyObject;
}

module.exports = tally;
