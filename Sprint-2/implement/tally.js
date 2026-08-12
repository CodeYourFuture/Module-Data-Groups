function tally(array) {
    
    if (!Array.isArray(array)){
        throw new TypeError('unexpected Array')
    }
    const charCount={};
    
    

    for(const char of array){
       charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount


}

module.exports = tally;
