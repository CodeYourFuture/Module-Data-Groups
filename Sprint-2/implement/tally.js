function tally(array) {
  // check if input is an array
  if (!Array.isArray(array)) {
    return { error: "Input must be an array" };
  }

  // create an empty object to store counts
  let counts = {};

  // Loop through the array and count items
  for (let item of array) {
    if (counts[item]) {
      //the loop checks if the current item already exists as a key in the counts object.
      counts[item] += 1; // Increase count if item exists
    } else {
      counts[item] = 1; //Initialize count if item is new
    }
  }

  return counts;
}

module.exports = tally;
