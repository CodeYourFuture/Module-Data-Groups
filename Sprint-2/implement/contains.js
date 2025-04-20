function contains(element, key) {
    const result = element[key];

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

    if (result === undefined) return false;
    else return true;
    
}
console.log(contains({a: 1, b: 2}, 'a'))
console.log(contains({a: 1, b: 2}, 'c'))
console.log(contains({firstName: "Cam" }, 'firstName'))
module.exports = contains;
