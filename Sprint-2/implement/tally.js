function tally(arr) {
const objectCount={}
if(!Array.isArray(arr)){
    throw new Error("Invalid input");
}
if(arr.length===0){
    return {}
}
for(const element of arr){
    objectCount[element]=objectCount[element] ? objectCount[element] +1:1;
}
return objectCount

}


module.exports = tally;
