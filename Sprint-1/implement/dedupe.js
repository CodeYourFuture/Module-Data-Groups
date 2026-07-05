function dedupe(list) {
  let uniqueList = [];
  // if it is duplicate insides the array, you take out the duplicate and return a new array with duplicates removed while preserving the first occurrence of each element from the original array.

  list.forEach(function (num) {
    if (!uniqueList.includes(num)) {
      uniqueList.push(num);
    }
  });

  return uniqueList;
}

module.exports = dedupe;
