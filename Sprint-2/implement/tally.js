function tally(input) {
  const obj = {};
  if (input === null || !Array.isArray(input)) {
    throw new Error("Invalid input");
  }
  input.forEach((el) => {
    obj[el] = (obj[el] || 0) + 1;
  });
  return obj;
}
module.exports = tally;
