function findMax(elements) {
    if (elements.length === 0) return '-Infinity';
    if (elements.length === 1) return elements;
    let maxNum = []
    for (i = 0 ; i < elements.length ; i++){
        if (typeof elements[i] === 'number'){
            if (maxNum.length === 0){
                maxNum[0] = elements[i]; //give a value for the first time
            } else {
                if (elements[i] > maxNum[0]){
                    maxNum[0] = elements[i];
                }
            }
        }
    }
    if (maxNum.length === 0){ return 'Family' } else { return maxNum }

}
module.exports = findMax;
