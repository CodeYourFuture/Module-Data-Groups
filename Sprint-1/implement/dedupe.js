function dedupe(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    currentItem = arr[i];
    if (!newArr.includes(currentItem)) {
      newArr.push(currentItem);
    }
  }
  return newArr;
}

module.exports = dedupe;
