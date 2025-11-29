// Counts how often each item appears in an array.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

function tally(arrayOfItems) {
  // Checks the input is actually an array
  const inputIsNotAnArray = !Array.isArray(arrayOfItems);

  if (inputIsNotAnArray) {
    throw new Error("Input must be an array");
  }

  const countObject = {};

  for (const item of arrayOfItems) {
    // If the item is already counted, add 1; otherwise start at 1
    const itemAlreadyCounted = countObject[item] !== undefined;

    if (itemAlreadyCounted) {
      countObject[item] = countObject[item] + 1;
    } else {
      countObject[item] = 1;
    }
  }

  return countObject;
}

module.exports = tally;
