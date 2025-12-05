function createLookup(myArray) {
  if (!Array.isArray(myArray)) return "Invalid input";
  const myObject = {};
  for (const pairs of myArray) {
    myObject[pairs[0]] = pairs[1];
  }
  return myObject;
}

module.exports = createLookup;
