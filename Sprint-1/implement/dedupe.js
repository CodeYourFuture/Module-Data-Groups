function dedupe(array) {
  // makes a new array to store non duplicate values
  const newArray = [];

  // loops over each item in the original array
  for (const item of array) {
    // checks if the values are not in the "newArray"
    if (!newArray.includes(item)) {
      // if item is not in "newArray" adds it to the array
      newArray.push(item);
    }
  }
  // returns the new deduped array
  return newArray;
}
console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]))// expect [5, 1, 2, 3, 8]