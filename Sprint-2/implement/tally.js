function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid input");
  }
  let obj = {};
  array.forEach((elem) => {
    obj[elem] = (obj[elem] || 0) + 1;
  });
  return obj;
}

module.exports = tally;
