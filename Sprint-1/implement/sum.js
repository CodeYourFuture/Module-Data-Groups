function sum(elements) {
    let sumOfAll = 0;
    for(let num of elements){
        if(typeof num === 'number'){
            sumOfAll += num ;
        }
    }
    return sumOfAll;
}

module.exports = sum;

/* for note
short hand for the above code
function sum(elements) {
  return elements.reduce((acc, num) => {
    return typeof num === "number" ? acc + num : acc; // add only numbers return condition ? return value if true : return value if false
  }, 0); // start sum at 0 which is initial value of acc 
}
*/
