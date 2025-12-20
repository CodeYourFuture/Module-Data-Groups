function tally(inputArray) {
  if (!Array.isArray(inputArray)) {
    throw new Error("error invalid input passed, please provide an array");
  }

  const tallyObject = {};
  for (const item of inputArray) {
    tallyObject[item] = (tallyObject[item] || 0) + 1;
  }
  return tallyObject;
}

module.exports = tally;
