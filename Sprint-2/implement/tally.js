function tally(input) {
  let out = {};

  if (!Array.isArray(input)) {
    throw new Error(
      `Wrong input type, expected an array but got ${typeof input}`
    );
  }

  for (const i of input) {
    if (out[i] === undefined) {
      out[i] = 1;
    } else if (out[i].hasOwnProperty(i)) {
      out[i] = out[i] + 1;
    }
  }

  return out;
}

module.exports = tally;
