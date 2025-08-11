function sum(elements) {

    if (elements.length === 0) return 0;
   // if (elements.length === 1) return elements;
    let sum = 0
    let noNum = []
    for (i = 0 ; i < elements.length ; i++){
        if (typeof elements[i] === 'number'){
            sum += elements[i];
        } else {
            noNum.push(elements[i])
        }
    }
    if (elements.length === noNum.length) return 'Family'
    return sum;
  //  if (maxNum.length === 0){ return 'Family' } else { return maxNum }


}
//console.log(sum([2,3,5,3]))
module.exports = sum;
