function tally(array) {
   
    if (array.length === 0) {
        return {};
    }
    if (typeof array === "string") {
        throw new Error; 
    }
    const object = {};
    for (i = 0; i < array.length; i++) {
        const currentItem = array[i];
        if(object.hasOwnProperty(currentItem)){
            object[currentItem] += 1;
            }
        
        else {
            object[currentItem] = 1; 
        }
        
    }
    
    return object;
}

module.exports = tally;
