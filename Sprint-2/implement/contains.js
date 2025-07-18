function contains(object1, prop1) {
  if (prop1 in object1) {
    return true;
  } else {
    return false;
  }
}

const myObject = [15, 20, 30];

console.log(contains(myObject, "test2"));

module.exports = contains;
