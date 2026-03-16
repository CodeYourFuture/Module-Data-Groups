// start your function

function contains(object, key) {
  if (Array.isArray(object) && Object.keys(object).length === 0) {
    return false;
  } else if (object.hasOwnProperty(key)) {
    return true;
  } else return false;
}

let key = "name";
const object = {
  name: "Roman",
  age: 33,
  city: "Birmingham",
};

module.exports = contains;
