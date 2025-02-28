function tally(arr) {
  let newObj = {};
  for (let n of arr) {
    if (Object.keys(newObj).includes(n)) { // if n is found in my obj as a key increment its value by else create an item inside my obj with key of n and value 1.
      //newObj[n] += 1; this code works fine but for better technique it is replaced by the code in the next line
      newObj[n] = (newObj[n]|| 0)+1; 
    }
    else {
      newObj[n] = 1; }
  }
  return newObj;
}
console.log(tally(["a", "a", "a", "b"])); // { a: 3, b: 1 }
module.exports = tally;

//Note
//newObj[n]=(newObj[n] || 0)+1;
//Using || to get a value where the left of it is undefined is a generally useful technique

