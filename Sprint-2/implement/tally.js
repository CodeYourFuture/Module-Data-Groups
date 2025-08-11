function tally(listOfItems) {
  if (!Array.isArray(listOfItems)) {
    throw new Error("Invalid input: expected an array");
  }
  const obj = {};
  for (const element of listOfItems) {
    obj[element] = (obj[element] || 0) + 1;
  }

  return obj;
}

module.exports = tally;
