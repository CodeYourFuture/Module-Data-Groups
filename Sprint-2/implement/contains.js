function contains(element, key) {
 
  if (typeof element !== "object" || element === null || Array.isArray(element)) {
    return false;
  }

    // console.log({
    //     key,
    //     typeKey: typeof key,

    //     result,
    //     typeResult: typeof result
    // })

    // if undefined
      // return false as doesnt exist
    // else, does exist!
      // return true

    if (!element.hasOwnProperty(key)) return false;
    return true;
    
}
console.log(contains({a: 1, b: 2}, 'a'))
console.log(contains({a: 1, b: 2}, 'c'))
console.log(contains({firstName: "Cam" }, 'firstName'))
console.log(contains({x: undefined}, 'x'));
module.exports = contains;
