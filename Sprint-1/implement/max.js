function findMax(elements) {
   if (elements.length === 0){
    return "-Infinity"
   }
   let maxNumber = findFirstNumberElement(elements);
   for (let i=0;i<elements.length;i++){
       if (numericValue(elements[i]) && elements[i] > maxNumber) {
         maxNumber = elements[i];
       }
   }
   return maxNumber;
}
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
    

module.exports = findMax;
