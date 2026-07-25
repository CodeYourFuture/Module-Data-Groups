// Refactor the implementation of includes to use a for...of loop

//my comments
//make a copy of the array
//check if target is in the array
function includes(list, target) {
  const targetFoundInArr = [];
  for (const li of list) {
    if (li === target) {
      targetFoundInArr.push(li);
    }
  }
  if (targetFoundInArr.length === 0) {
    return false;
  }
  if (targetFoundInArr.length >= 1) {
    return true;
  }
}
console.log(includes([1, 2, 3, 4, 55, 6, null, 6, 7], 6));
module.exports = includes;
