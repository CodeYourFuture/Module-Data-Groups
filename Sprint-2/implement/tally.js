function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  for (let item of items) {
    if (Object.hasOwn(result, item)) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }npm TextDecoderStream
  }

  return result;
}

module.exports = tally;
