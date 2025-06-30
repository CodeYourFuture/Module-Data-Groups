function dedupe(arr) {
    const result = [];
    let resultArray = 0;

for (let i= 0; i< arr.length; i++){
    let isDuplicate = false;

for (let j = 0; j < resultArray; j++){
    if(arr[i]===result[j]) {
        isDuplicate = true;
        break;
    }
} 
if (!isDuplicate) {
    result[resultArray] = arr[i];
    resultArray++;
}   
} 
return result;   
}
module.exports = dedupe;