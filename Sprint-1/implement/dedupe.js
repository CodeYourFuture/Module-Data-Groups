function dedupe(array) {
  //create a duplicate,to avoid changing the array
  const copiedArray = Array.from(array);

  //Initialise an empty array (to collect non-duplicates in)
  const dedupedArray = [];

  //create a for loop to collect non-duplicates
  for (element of copiedArray) {
    if (!dedupedArray.includes(element)) {
      dedupedArray.push(element);
    }
  }
  return dedupedArray;
}

module.exports = dedupe;
