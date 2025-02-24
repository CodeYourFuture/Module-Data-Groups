function dedupe(arr) {
  const modifyArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
  return modifyArr;
}

console.log(dedupe([5, 1, 5, 5, `cat`, `cat`]));

module.exports = dedupe;
