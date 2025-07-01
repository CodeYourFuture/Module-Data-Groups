/*function dedupe(list) {
  if (!Array.isArray(list) || list.length === 0) return [];
  let uniqueValues = [];
  for (const element of list) {
    if (!uniqueValues.includes(element)) uniqueValues.push(element);
  }
  return uniqueValues;
}*/

function dedupe(list) {
  if (!Array.isArray(list)) return [];
  else{
  return [...new Set(list)];//Passing list into Set removes any duplicates automatically.
}}
module.exports = dedupe;