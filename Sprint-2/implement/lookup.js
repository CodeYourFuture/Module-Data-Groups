// Converts an array of pairs into a lookup object.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

function createLookup(arrayOfPairs) {
  const lookupObject = {};

<<<<<<< HEAD
  for (const [key, value] of arrayOfPairs) {
=======
  for (const pair of arrayOfPairs) {
    const key = pair[0];
    const value = pair[1];

    // Bracket notation allows using a variable as the property name
>>>>>>> 627293b06546ffdae8f1e418c5ec8d53a0aed085
    lookupObject[key] = value;
  }

  return lookupObject;
}

module.exports = createLookup;
