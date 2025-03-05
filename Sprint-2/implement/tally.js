function tally(input) {
    if(!Array.isArray(input)){
        throw new Error("Invalid input: Expected an array");
    }
    const output ={};
    for(const item of input){
        output[item]= (output[item] || 0)+1;//count occurrence
    }
    
   return output;
}

module.exports = tally;
