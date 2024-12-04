function dedupe(list) {// return [] if list is empty array
  if (list.length === 0){
    return [];
  } 
  // declares an empty array to push unique value
 let uniqueList = [];
 return list.filter ((item) => {
  if (uniqueList.includes(item)){
  return false;
 }
uniqueList.push(item);
return true;
});
}
console.log([2,5,1,6,9])
// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array
// test.todo("given an empty array, it returns an empty array");
module.exports = dedupe;