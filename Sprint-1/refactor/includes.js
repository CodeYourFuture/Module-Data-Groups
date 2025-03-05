// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {

  for (const element of list) { // implemented a for...of loop
  
    if (element === target) { // if element is equal to target return true
      return true;
    }
  }
  return false;
}

module.exports = includes;
