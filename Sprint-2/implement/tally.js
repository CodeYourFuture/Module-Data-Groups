function tally(input) {
  let out = {};

  if (!Array.isArray(input)) {
    throw new Error(
      `Wrong input type, expected an array but got ${typeof input}`
    );
  }

  for (const i of input) {
    if (!Object.hasOwn(out, i)) {
      out[i] = 1;
    } else {
      out[i] = out[i] + 1;
    }
  }

  return out;
}

console.log(tally(["a", "a", "b"]));

module.exports = tally;
