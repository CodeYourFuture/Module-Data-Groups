function dedupe(list) {
  if (list.length === 0) {
    return [];
  }
  const newList = [];
  for (const item of list) {
    if (newList.includes(item)) {
      continue;
    } else {
      newList.push(item);
    }
  }
  return newList;
}
console.log(dedupe(["a", "a", "a", "b", "b", "c"]));
module.exports = dedupe;
