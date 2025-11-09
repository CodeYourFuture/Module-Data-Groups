function tally(array) {
    if (!Array.isArray(array)){ //check if array is array
        throw new Error("Invalid input");
    }
    if (array.length === 0 ){
    return {};
   } 
   const obj = {}
   for (let item of array){
    if (obj[item]){
        obj[item]+=1;
    }
    else{
        obj[item]=1;
    }
   }
   return obj
}

module.exports = tally;
