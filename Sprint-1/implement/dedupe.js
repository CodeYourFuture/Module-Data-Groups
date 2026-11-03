function dedupe(list) {
  const elements = [];
  if (list.length === 0) {
    return [];
  }

  
  for (const item of list) {
    if (!elements.includes(item)) {
      elements.push(item);
    }
  }
  return elements;
}

const arr = [2, 3, 1, 2];
console.log(dedupe(arr));

module.exports = dedupe;
