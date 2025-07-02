function dedupe(sampleArray) {
    if (sampleArray.length === 0) {
        return [];
    }
    let dedupeArray = [];
    for (let i=0;i<sampleArray.length;i++){
      // check all elements in sampleArray and if not in dedupeArray push in it
      if (!dedupeArray.includes(sampleArray[i])) {
        dedupeArray.push(sampleArray[i]);
      }
    }
    return dedupeArray;
}
module.exports = dedupe;