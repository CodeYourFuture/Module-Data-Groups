function contains(object1, prop1) {
  if (
    typeof object1 !== "object" ||
    object1 === null ||
    Array.isArray(object1)
  ) {
    console.log("Error: object1 must be a non-null object and not an array.");
    return false;
  }

  if (prop1 in object1) {
    return true;
  } else {
    return false;
  }
}

const myObject = [15, 20, 30];

console.log(contains(myObject, "test2"));

module.exports = contains;
