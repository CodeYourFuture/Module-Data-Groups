// Converts an array of pairs into a lookup object.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

function createLookup(arrayOfPairs) {
  const lookupObject = {};

  for (const [key, value] of arrayOfPairs) {
    lookupObject[key] = value;
  }

  return lookupObject;
}

module.exports = createLookup;
