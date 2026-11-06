function dedupe(list) {
  if (list.length === 0) {
    return [];
  }
  const newList = [];
  for (const item of list) {
    if (newList.includes(item)) {
      continue;
    }
    newList.push(item);
  }
  return newList;
}
module.exports = dedupe;
