function tally(myArray) {
  if (!Array.isArray(myArray)) throw new Error("Invalid input");
  if (myArray.length === 0) return {};
  const myObject = {};
  for (const item of myArray) {
    myObject[item] = (myObject[item] || 0) + 1;
  }
  return myObject;
}

module.exports = tally;
