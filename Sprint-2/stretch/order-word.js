function orderWords(obj) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
    throw new Error("Param must be an object");
  }

  const orderedObject = obj;
  return sortWordCounts(orderedObject);
}

function sortWordCounts(wordCounts) {
  const sortedEntries = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
  const sortedWordCounts = {};
  sortedEntries.forEach(([key, value]) => {
    sortedWordCounts[key] = value;
  });
  return sortedWordCounts;
}

module.exports = orderWords;
