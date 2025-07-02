function sum(elements) {
    //for empty array input
    if (elements.length === 0) {
        return 0;
    }
    if (allNumericArray(elements) ) {
      return sumOfArray(elements,"num");
    }else if (allNoneNumericArray(elements)){
        return sumOfArray(elements,"str");
    }
   return sumOfMixedArray(elements);

}


//detect if all elements of array has numeric values 
function allNumericArray(myArray) {
    for (let i=0;i<myArray.length;i++){
        if (typeof myArray[i] !== "number") {
          return false;
        }
    }
    return true;
}

 
 //detect if all elements of array has non-numeric values 
 function allNoneNumericArray(myArray){
    for (let i=0;i<myArray.length;i++){
        if (typeof myArray[i] === "number"){
            return false;
        }
    }
    return true;

 }


//calculate sum of unmixed arrays
function sumOfArray(myArray,arrayType){
    let total;
    if (arrayType==="num"){
         total=0;
    }else{
         total='';}
    for(let i=0;i<myArray.length;i++){
       total = total + myArray[i];
    }
    return total;
}
//calculate sum of mixed arrays
function sumOfMixedArray(myArray){
    let sum=0
    for(let i=0;i<myArray.length;i++){
        if (typeof myArray[i] === "number"){
            sum = sum + myArray[i]; 
        }
    }
    return sum;
}


module.exports = sum;
