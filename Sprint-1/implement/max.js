function findMax(elements) {
   if (elements.length === 0){
    return "-Infinity"
   }
   let maxNumber=0;
   for (let i=0;i<elements.length;i++){
       if (elements[i]>maxNumber){
        maxNumber=elements[i]
       }
   }
   return maxNumber;
}

module.exports = findMax;
