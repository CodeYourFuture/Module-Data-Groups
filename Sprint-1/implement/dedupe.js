function dedupe(arr) {
  const resultArray = [];

  if (!Array.isArray(arr)) return null;
  if (arr.length == 0) return [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArray.includes(arr[i])) resultArray.push(arr[i]);
  }
  return resultArray;
}
module.exports = dedupe;
