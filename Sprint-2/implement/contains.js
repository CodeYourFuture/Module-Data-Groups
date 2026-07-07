const objects= {
  a: 1,
  b: 2,
};

function contains(objects, key) {
  //if key element is inside the objects,  show true; else, false.
  if (key in object) {
    return true;
  } else {
    return false;
  }
}

module.exports = contains;

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/
