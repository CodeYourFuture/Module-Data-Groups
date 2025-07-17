function tally(list) {
  const countItem = {};

  if (!Array.isArray(list)) {
    throw new Error("Your input is invalid!");
  }

  if(list.length === 0){
    return {}
  }

  for (let i = 0; i < list.length; i++) {
    let currentItem = list[i];
    if (countItem[currentItem]) {
      countItem[currentItem] = countItem[currentItem] + 1;
    } else {
      countItem[currentItem] = countItem[currentItem] = 1;
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
