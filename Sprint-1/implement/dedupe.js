function dedupe(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
      }
    }

    if (isDuplicate === false) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}
module.exports = dedupe;
