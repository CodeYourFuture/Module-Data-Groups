function tally(items) {
    if(!Array.isArray(items)){
        throw new Error("Input must me and array"); 
        // validate  and throw error if input is not an array . 
    }
     const frequency = {};
     for (let item of items){
       if (item in frequency){
        frequency[item] +=1;
       }else{
         frequency[item] = 1
       }
      
     }
    
    
   return frequency;
}

module.exports = tally;
