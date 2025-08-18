function dedupe(list) {
  let result = [];

  for (let item of list) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = dedupe;
