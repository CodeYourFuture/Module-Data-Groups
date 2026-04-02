function sum(elements) {
  // adds numbers and ignores non-numbers unless there are no valid numbers then throws error

  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array"); //checks input is an array if not throws error
  }

  if (elements.length === 0) return 0; // <-- empty array returns 0

  let total = 0;
  let foundValid = false; //starts at false and will become true if valid number found

  for (const val of elements) {
    if (!Number.isFinite(val)) continue;
    foundValid = true; // loops and checks if input valid and if valid changes foundValid to true
    total += val; //adds number to sum
  }

  return foundValid ? total : "Invalid Input"; // if at least one valid value is found return sum if no valid number is found return Invalid Input
}
module.exports = sum;
