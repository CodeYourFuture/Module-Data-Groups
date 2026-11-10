// function tally() {}

// module.exports = tally;

function tally(arr) {
  // Check if arr is not an array (handling strings, numbers, null, undefined, or objects)
  if (!Array.isArray(arr)) {
    throw new Error("tally requires an array");
  }

  const result = {};

  for (const item of arr) {
    if (Object.prototype.hasOwnProperty.call(result, item)) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
