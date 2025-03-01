function dedupe(a) {
  let listOfUniqueValues = [];
  a.forEach((item) => {
    if (!listOfUniqueValues.includes(item)) {
      listOfUniqueValues.push(item);
    }
  });
  return listOfUniqueValues;
}
dedupe(["a", "a", "a", "b", "b", "c"]);
module.exports = dedupe;
