module.exports = dedupe;
function dedupe(arr) {
  let newArr = [];
  if (arr.length == 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) newArr.push(arr[i]);
    }
  }
  return newArr;
}
