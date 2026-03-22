// start with the function;
function dedupe(arr) {
  if (arr.length === 0) return [];
  const cleanArr = [];
  for (let item of arr) {
    if (!cleanArr.includes(item)) {
      cleanArr.push(item);
    }
  }
  return cleanArr;
}
module.exports = dedupe;
