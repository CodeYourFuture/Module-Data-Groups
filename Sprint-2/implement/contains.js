function contains(object, property) {
  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    console.log(Object.hasOwn(object, property));
    return Object.hasOwn(object, property);
  }
  return false;
}

// function contains(object, property) {
//   if (typeof object === "object" && object !== null && !Array.isArray(object)) {
//     for (const key in object) {
//       if (key === property) {
//         //console.log(`${object[key]}`);
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function contains(object, property) {
//   for (const key of Object.keys(object)) {
//     if (key === property) {
//       console.log(`${object[key]}`);
//       return true;
//     }
//   }
//   return false;

const profile = {
  name: "Gita",
  age: 22,
  school: "Leith Academy",
};

//const result = contains([1, 2, "age"], "age");
//console.log(result);

module.exports = contains;
