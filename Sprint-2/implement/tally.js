function tally(list) {
  const countItem = {};
//Throw new error if type is not array
  if (!Array.isArray(list)) {
    throw new Error("Your input is invalid!");
  }
//return empty object if array is empty
  if(list.length === 0){
    return {}
  }
//Loop through the array and count how many times each item occurs.
  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    //if the current item exist, increment its count by 1.
    if (countItem[currentItem]) {
      countItem[currentItem] + 1;
    } else {
      //Otherwise initial its count by 1
      countItem[currentItem] = 1;
    }
  }
  return countItem;
}
// // let call1 = tally("");
// let call2 = tally(["a", "a", "b", "c"]);
// let call3 = tally(["a", "a", "a", "b", "z", "z"]);
// let call4 = tally([]);
// // console.log(call1);
// console.log(call2);
// console.log(call3);
// console.log(call4);
module.exports = tally;
