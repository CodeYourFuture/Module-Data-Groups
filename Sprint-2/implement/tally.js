function tally(myArray) {
  if (!Array.isArray(myArray)) {
    throw new Error();
  } else if (myArray.length === 0) {
    return {};
  }
  let tallyObject = Object.create(null);
  for (const singleItems of myArray) {
    if (tallyObject[singleItems] === undefined) {
      tallyObject[singleItems] = 1;
    } else {
      tallyObject[singleItems] += 1;
    }
  }
  return tallyObject;
}
module.exports = tally;
