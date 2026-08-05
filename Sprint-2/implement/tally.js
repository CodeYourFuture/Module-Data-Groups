function tally(array) {
  const tallyObject = Object.create(null);
  if (!Array.isArray(array)) {
    throw new Error("Invalid input");
  }
  for (const item of array) {
    if (tallyObject[item] === undefined) {
      tallyObject[item] = 1;
    } else {
      tallyObject[item]++;
    }
  }
  return tallyObject;
}
module.exports = tally;
