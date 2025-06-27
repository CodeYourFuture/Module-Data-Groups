// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  //keeps looping through list
  for (let index = 0; index < list.length; index++) {
    //declares a new variable each time it goes through the loop 
    // called element and it assigns it the value of the index which the loop 
    //goes through at that time
    const element = list[index];
    //it checks if any of the indexes in the array is identical to the target
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
