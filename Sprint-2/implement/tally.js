function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid data type entered"');
  }
  if (arr.length === 0) {
    return {};
  }
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}
module.exports = tally;
