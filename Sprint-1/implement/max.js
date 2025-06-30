function findMax(elements) {
  // check if the input is an array; if not return -Infinity
  if (!Array.isArray(elements)) return -Infinity;

  //initialize max with the smallest possible number value
  let max = -Infinity;

  //loop through each element in the array
  for (let i = 0; i < elements.length; i++) {
    const num = elements[i];

    // check if the current element is finite number
    if (typeof num === "number" && Number.isFinite(num)) {
      //update max if the current number is greater than the current max
      if (num > max) {
        max = num;
      }
    }
  }
  //return max number if found or -Infinite if non found
  return max;
}

module.exports = findMax;
