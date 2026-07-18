function dedupe(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray
}

module.exports = dedupe;