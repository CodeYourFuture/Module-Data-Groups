function tally(array) {
  let tallyObject = {};
  if (Array.isArray(array)) {
    for (const item of array) {
      if (tallyObject[item] === undefined) {
        tallyObject[item] = 1;
      } else {
        tallyObject[item]++;
      }
    }
    return tallyObject;
  } else {
    throw new Error("Invalid input");
  }
}
module.exports = tally;
