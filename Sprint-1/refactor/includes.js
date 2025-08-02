// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  
    for (const listA of list) {
    
    if (listA === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;


