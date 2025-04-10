function tally(array) {
    try {
        if (typeof(array) == 'string'){
            console.log('String is invalid input');
            return false;
        }
        let copy = [];
        for (let i=0; i<array.length; i++){
            if (copy.indexOf(array[i]) === -1) {
                copy.push(array[i]);
            }       
        }
        let object = {};
        for (let i=0; i < copy.length; i++){
            let count = 0;
            for (let j=0; j < array.length; j++){
                if (array[j] == copy[i]){
                    count = count + 1;
                }
            }
            object[copy[i]] = count;
        }
        return object;
    } catch(e){
        console.log(e);
        return false;
    }
    
}

module.exports = tally;
