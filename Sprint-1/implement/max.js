function findMax(elements) {
  //find largest number in an array
  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array"); //checks input is an array if not throws error
  }

  let max = -Infinity; //starts at -Infinity so any number will be bigger
  let foundValid = false; //starts at false and will become true if valid number found

  for (const val of elements) {
    if (!Number.isFinite(val)) continue; //skips non-numeric values

    foundValid = true; //sets to true if a valid number is found
    if (val > max) {
      max = val; //updates max if current value is greater
    }
  }
  if (!foundValid) {
    //if no valid numbers found, returns"-Inifinity"  this includes invalid data and empty arrays
    return -Infinity;
  }

  return max; //returns the largest number found
}

module.exports = findMax;
