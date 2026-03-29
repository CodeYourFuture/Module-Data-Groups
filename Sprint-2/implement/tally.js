function tally(array) {
  if (!Array.isArray(array)) throw new Error("Not an array");
  const tallyObject = {};
  for (const item of array) {
    if (Object.hasOwn(tallyObject, item)) tallyObject[item] += 1;
    else tallyObject[item] = 1;
  }
  return tallyObject;
}
module.exports = tally;
