function dedupe(arr) {
  if (arr.length === 0) return [];
  const dedupeArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!dedupeArray.includes(arr[i])) {
      dedupeArray.push(arr[i]);
    }
  }
  
  return dedupeArray;
}
console.log(dedupe([1, 1, 2]));
module.exports = dedupe;
