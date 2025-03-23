function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const object = {};

  for (let element of items) {
    if (object[element]) {
      object[element] += 1;
    } else {
      object[element] = 1;
    }
  }

  return object;
}

module.exports = tally;
