function findMax(elements){
  // First, we go through the array and keep only the numbers.
  // Anything that's not a number (like strings or other types) gets ignored.
  const filteredValues = elements.filter(element => typeof element === "number");
  console.log(filteredValues); // Just showing the filtered numbers to check what we got.

  // If there are no numbers in the array, we return -Infinity.
  // This is like saying, "There's no maximum because there are no valid numbers."
  if (filteredValues.length === 0){
    return -Infinity;
  }
  // If we have some numbers, we use Math.max to find the largest one.
  // The `...filteredValues` spreads the numbers so Math.max can compare them all.
  return Math.max(...filteredValues);
}
console.log(findMax([2, 3, 4, 5, "heelo", "world"]));

module.exports = findMax;
