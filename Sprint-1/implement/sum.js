function sum(elements) {
    //for empty array input
    if (elements.length === 0) {
        return 0;
    }
    if (allNumericArray(elements)){
        return sumOfArray(elements);

    }

}


//detect numeric values 
function allNumericArray(myArray) {
    for (let i=0;i<myArray.length;i++){
        if (typeof myArray[i] !== "number") {
          return false;
        }
    }
    return true;
}

 //find the first number element in an array
 //input : an array
 //output: first number element    
 function findFirstNumberElement(myArray){
    for (let i=0;i<myArray.length;i++){
        if (typeof myArray[i] === "number"){
            return myArray[i];
        }
    }

 }   
 
 
 //detect all non-numeric value array
 function allNoneNumericArray(myArray){
    for (let i=0;i<myArray.length;i++){
        if (typeof myArray[i] === "number"){
            return false;
        }
    }
    return true;

 }

 function findMaxNoneNumeric(myArray,maxElement){
    for (let i=0;i<myArray.length;i++){
        if (myArray[i] > maxElement) {
            maxElement = myArray[i];
           }
     }
    return maxElement;
}

function sumOfArray(myArray){
    let total=0;
    for(i=0;i<myArray.length;i++){
       total = total + myArray[i];
    }
    return total;
}


module.exports = sum;
