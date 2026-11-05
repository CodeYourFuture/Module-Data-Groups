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
//console.log(dedupe([5, 1, 1, 2, 3, 2, 5, 8]));
module.exports = dedupe;
