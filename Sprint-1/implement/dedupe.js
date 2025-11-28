// This defines a function named dedupe with a parameter arrayInput. arrayInput should be an array.
function dedupe(arrayInput) {
  // This checks whether the input is not an array.
  if (!Array.isArray(arrayInput)) {
    // If the input is not an array, the function stops, throws a TypeError and shows an error message saying:“Input must be an array.”
    throw new TypeError("Input must be an array");
  }
  // This checks if the array is empty (has no elements).
  if (arrayInput.length === 0) {
    // If the array is empty, it returns an empty array.
    return [];
  }

  // This declares a new variable `newArray` which will hold a reference to an empty array in memory
  const newArray = [];
  // This decares a new varibale `seen` which will hold a reference to the actual set object in memory
  const seen = new Set(); // variable seen keeps track of all items that have already been added to the result array
  // seen is a Set object that remembers items,

  // newArray is an array that holds the actual result.

  // This starts a loop that goes through each element in the input array one by one.
  for (const item of arrayInput) {
    // This big condition checks two things before adding an item:

    // !seen.has(item) — The item has not been added before.

    // The item is either a number (but not NaN) or a string.
    // So only real numbers and strings that haven’t appeared yet will be kept.
    if (
      !seen.has(item) &&
      ((typeof item === "number" && !Number.isNaN(item)) ||
        typeof item === "string")
    ) {
      newArray.push(item); // If the item passes the condition, it gets added to the new array.
      seen.add(item); // The item is then recorded in the Set, so it won’t be added again later.
    }
  }
  // After the loop finishes, return the final deduplicated array
  return newArray; // After checking all items, the function returns the new array with duplicates removed and invalid items filtered out.
}

module.exports = dedupe; // This line allows the dedupe function to be used in other files (like the test file).