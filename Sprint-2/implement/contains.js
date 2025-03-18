function contains(object, propertyName) {
  // console.log(propertyName, '<-- property name');
  if (!propertyName) return false;
  if (!object) return false;
  if (object.hasOwnProperty(propertyName)) return true;
  else return false;
};

module.exports = contains;

console.log(contains({a: 1, b: 2}, 'a'));
console.log(contains({a: 1, b: 2}));
console.log(contains());
console.log(contains({a: 1, b: 2}, 'c'));
console.log(contains([1,2,3]));
