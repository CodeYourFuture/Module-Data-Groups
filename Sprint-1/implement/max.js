function findMax(arr) {
  // Handle empty array - return -Infinity
  if (arr.length === 0) {
    //it is the lowest numeric value ever possible
    return -Infinity;
  }

  let max = -Infinity;
    // iterate over the array and select one by one and pass them to the following if
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    // Only consider numbers (not strings, null, etc.)
    if (typeof currentItem === "number" && !isNaN(currentItem)) {
      if (currentItem > max) {
        max = currentItem;
      }
    }
  }

  return max;
}
module.exports = findMax;
