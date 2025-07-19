function tally(list) {
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
console.log(tally());

module.exports = tally;


