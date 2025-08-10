function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const object = {};

  for (let element of items) {
    // if (object[element]) {
    //   object[element] += 1;
    // } else {
    //   object[element] = 1;
    // }
    object[element] = (object[element] || 0) + 1; // Using object bracket notation that takes a variable as a key and logical OR operator
  }

  return object;
}

module.exports = tally;
