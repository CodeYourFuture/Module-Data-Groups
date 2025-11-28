function createLookup(myArray) {
  if (!Array.isArray(myArray)) return "Invalid input";
  const myObject = {};
  for (let i = 0; i < myArray.length; i++) {
    myObject[myArray[i][0]] = myArray[i][1];
  }
  return myObject;
}

module.exports = createLookup;
