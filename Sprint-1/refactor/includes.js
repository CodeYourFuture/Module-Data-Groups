// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  //for (let index = 0; index < list.length; index++) {
    //const element = list[index];
     for (const element of list) {
        if (element === target) {
          return true;
        }
      }
       return false;
  }
 

console.log(includes(["a", "b", "c"], "a")); // expected output true

module.exports = includes;
