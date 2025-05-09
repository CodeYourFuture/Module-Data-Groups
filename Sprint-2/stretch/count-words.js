function countWords(str) {
  const cleanedStr = str.replace(/[.,!?]/g, "").toLowerCase();

  
  const words = cleanedStr.split(/\s+/);


  const wordCounts = {};


  for (const word of words) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }


  const sortedWordCounts = Object.entries(wordCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .reduce((sortedObj, [key, value]) => {
      sortedObj[key] = value;
      return sortedObj;
    }, {});

  return sortedWordCounts;
}

module.exports = countWords;

