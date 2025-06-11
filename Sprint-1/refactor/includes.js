// Refactor the implementation of includes to use a for...of loop
//this function checks if our target is present in the array
function includes(list, target) {
  //checking each item in the array against our target to return true if present or false if not present
  /*for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false; */
  // the for of loop simplifies the implementation drastically
  for (const t of list) {
    if (t === target) return true;
  }
  return false;
}

module.exports = includes;
