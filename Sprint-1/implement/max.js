function findMax(elements) {
  let maxElement = 0;
  
  //for empty array input
    if (elements.length === 0) {
        return "-Infinity";
    }

  //for only non-number values array input
    if (totalyNoneNumericArray(elements)) {
        maxElement = elements[0];
        return findMaxNoneNumeric(elements, maxElement);
    }

  //for only number or mixed values array input
    maxElement = findFirstNumberElement(elements);
    for (let i = 0; i < elements.length; i++) {
        if (numericValue(elements[i]) && elements[i] > maxElement) {
        maxElement = elements[i];
        }
    }
  
  return maxElement;
}




//detect numeric values 
function numericValue(arrayElement) {
    if (typeof arrayElement === "number"){
        return true;
     }
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
 function totalyNoneNumericArray(myArray){
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

module.exports = findMax;
