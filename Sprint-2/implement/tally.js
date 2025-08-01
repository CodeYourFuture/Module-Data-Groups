function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  const result = {}; // our empty object

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (result[item]) {
      // checks if the property exists in our abject
      //if we have counted this item before increase its count if
      result[item] = result[item] + 1;
    } else {
      // If we are seeing this item for the first time set its count to 1
      result[item] = 1;
    }
  }

  return result;
}

module.exports = tally;
