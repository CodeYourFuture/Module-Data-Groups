function tally(arrayOfItems) {
  object = {};
  if (!Array.isArray(arrayOfItems)) {
    throw new Error("Invalid input");
  } else {
    for (char of arrayOfItems) object[char] = (object[char] || 0) + 1;
    return object;
  }
}

module.exports = tally;
