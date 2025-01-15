// Refactor the implementation of includes to use a for...of loop

/*function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}*/

/**unction includes(list, target) {
  // Loop through each item in the list
  for (let i = 0; i < list.length; i++) {
    // If the current item matches the target, return true
    if (list[i] === target) {
      return true;
    }
  }

  // If no match is found, return false
  return false;
};
console.log(includes([1, 2, 2, 3], 2));*/

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;


