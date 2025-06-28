function contains(object, property) {
  for (const key of Object.keys(object)) {
    if (key === property) {
      console.log(`${object[key]}`);
      return true;
    }
  }
  return false;
}

const profile = {
  name: "Gita",
  age: 22,
  school: "Leith Academy",
};

const result = contains(profile, "age");
console.log(result);

module.exports = contains;
