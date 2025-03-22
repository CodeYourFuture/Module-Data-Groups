function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error(`Invalid input!`);
  }
  object = {};
  for (let i = 0; i < array.length; i++) {
    object[array[i]] = (object[array[i]] || 0) + 1;
  }
  return object;
}

module.exports = tally;
