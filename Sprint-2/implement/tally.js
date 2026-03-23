function tally(arr) {
  const object = Object.create(null);
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input: tally expects an array");
  }
  if (arr.length === 0) {
    return object;
  }
  arr.forEach((ele) => {
    object[ele] = (object[ele] || 0) + 1;
  });
  return object;
}

module.exports = tally;
