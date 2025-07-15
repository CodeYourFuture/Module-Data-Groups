function contains(obj, property) {

  if(Object.keys(obj).length === 0){
    return false;
  }
  if(Object.hasOwn(obj,property)){
    return true;
  }else{
    return false;
  }
}

// console.log(contains({ a: 1, b: 2 }, "a"));
// console.log(contains({ a: 1, b: 2 }, "c"));
// console.log(contains({}, "c"))
module.exports = contains;
