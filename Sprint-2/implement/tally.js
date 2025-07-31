function tally(listItems) {
  if (typeof listItems === "string" || !Array.isArray(listItems)) return new Error("Input must be array");
  if (listItems.length === 0) return {};

  let objectItems = {};

  for (const item of listItems) {
    //objectItems[item] = (objectItems[item] || 0) + 1;
    if (objectItems[item]) {
        objectItems[item] += 1;
    } else {
        objectItems[item] = 1;
    }
  }

  return objectItems;
}
console.log(tally(['a','a','a','b','c','c','a']))
module.exports = tally;
