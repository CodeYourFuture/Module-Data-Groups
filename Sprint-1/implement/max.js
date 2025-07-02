function findMax(elements) {
   if (elements.length === 0){
    return "-Infinity"
   }
   let maxNumber = elements[0];
   for (let i=0;i<elements.length;i++){
       if (elements[i]>maxNumber){
        maxNumber=elements[i]
       }
   }
   return maxNumber;
}

module.exports = findMax;
