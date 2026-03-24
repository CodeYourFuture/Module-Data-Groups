function findMax(elements) {
  //find largest number in an array
  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array"); //checks input is an array if not throws error
  }

  if (elements.length === 0) return -Infinity; // if empty then returns -Infinity

  let max = -Infinity; //starts at -Infinity so any number will be bigger
  let foundValid = false; //starts at false and will become true if valid number found

  for (const val of elements) {
    if (!Number.isFinite(val)) continue;
    foundValid = true; // loops and checks if input valid and if" valid changes foundValid to true
    if (val > max) {
      max = val; // if bigger than max update max
    }
  }
  return foundValid ? max : "Invalid Input"; // if at least one valid value is found return max if no valid number is found return Invalid Input
}

module.exports = findMax;
