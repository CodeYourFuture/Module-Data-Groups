function dedupe(arr) {
  let arrDedupe = [];
  for (i = 0; i < arr.length; i++) {
    if (!arrDedupe.includes(arr[i])) {
      arrDedupe.push(arr[i]);
    }
  }
  return arrDedupe;
}
//console.log(dedupe(["hi","bye","hi"]));
module.exports = dedupe;
