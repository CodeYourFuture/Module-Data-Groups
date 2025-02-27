function tally(arr) {
  let newObj = {};
  for (let n of arr) {
    if (Object.keys(newObj).includes(n)) { // if n is found in my obj as a key increment its value by else create an item inside my obj with key of n and value 1.
      newObj[n] += 1;  }
    else {
      newObj[n] = 1; }
  }
  return newObj;
}
console.log(tally(["a", "a", "a", "b"])); // { a: 3, b: 1 }
module.exports = tally;
