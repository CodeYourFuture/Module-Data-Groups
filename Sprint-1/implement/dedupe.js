function dedupe(list) {
  if (!Array.isArray(list) || list.length === 0) return [];
  let uniqueValues = [];
  for (const element of list) {
    if (!uniqueValues.includes(element)) uniqueValues.push(element);
  }
  return uniqueValues;
}

module.exports = dedupe;
