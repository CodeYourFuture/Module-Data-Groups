function calculateMean(list){
let total = 0;

total+=list[0];
total+=list[1];
total+=list[2];

let result = total/list.length;
return result;
}
module.exports = calculateMean;