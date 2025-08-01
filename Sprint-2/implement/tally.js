function tally(arr) {
    objectResult = {}
    if(arr.length ===0)
        return {}
    if( !Array.isArray(arr)) {
        throw new Error ('Error parameter must be an array.')
    }
for(count  of arr) {
    objectResult[count]= (objectResult[count] || 0) +1 ;
}

return objectResult
}

console.log(tally(['a','b','c','c']))
console.log(tally([]))
console.log(tally("Hello"))
module.exports = tally;
