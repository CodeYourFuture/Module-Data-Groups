function dedupe(arr) {

if(arr.length===0) return arr;
const dedupeArray=[]
for(let i=0;i<arr.length;i++){

    if(!dedupeArray.includes(arr[i])){
        dedupeArray.push(arr[i])
    }
}
return dedupeArray;


}
module.exports=dedupe;
