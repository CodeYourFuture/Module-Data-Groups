const dedupe = (arr) => {
  newArr = [...new Set(arr)];
  return newArr;
};
console.log(dedupe(["Shoes", "Shirt", "Shoes", "Hat", "Shirt"]));
module.exports = dedupe;
