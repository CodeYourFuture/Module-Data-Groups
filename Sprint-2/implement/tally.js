function tally(arr) {
     
const newObj={} ;
if (arr.length === 0) return newObj;
for(const item of arr){
(newObj[item]=(newObj[item] || 0)+1)
}
return newObj;
}

console.log(tally(['a','a','t']))


module.exports = tally;
