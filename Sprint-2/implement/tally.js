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

  const countObject = Object.create(null);

  for (const item of arrayOfItems) {
    const currentCount = countObject[item] || 0;
    countObject[item] = currentCount + 1;
  }

  return countObject;
}

module.exports = tally;
