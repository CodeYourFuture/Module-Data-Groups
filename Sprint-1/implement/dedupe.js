function dedupe(arr) {
  if (arr.length === 0) {
    return arr;
  }
  const newArr = [];
  for (const item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

module.exports = dedupe;
