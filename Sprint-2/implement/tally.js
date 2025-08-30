function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error ("Input must be an array");
  } else {
    const result = {};
    if (list) {
      for (const item of list) {
        if (result[item]) {
          result[item] += 1;
        } else {
          result[item] = 1;
        }
      }
    }
    return result;
  }
}
console.log(tally());

module.exports = tally;
