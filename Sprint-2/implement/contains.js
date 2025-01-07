function contains(obj, props) {
  if (typeof obj !== "object" || Array.isArray(obj) || obj == null)
    return false;
  return Object.keys(obj).includes(props);
}
// console.log(contains("a", "c"));
module.exports = contains;
