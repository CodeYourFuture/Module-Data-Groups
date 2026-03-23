function tally(myArray) {
  if (myArray.length === 0) {
    return {};
  } else if (typeof myArray === "string") {
    throw Error;
  }
  let tallyObject = {};
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
