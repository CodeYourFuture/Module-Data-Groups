const dedupe = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  newArr = [...new Set(arr)];
  return newArr;
};
console.log(dedupe(["Shoes", "Shirt", "Shoes", "Hat", "Shirt"]));
module.exports = dedupe;
