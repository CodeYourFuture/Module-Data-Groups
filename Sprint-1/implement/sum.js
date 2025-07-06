function sum(elements) {
    //for empty array input
    if (elements.length === 0) {
        return 0;
    }
    let total=0;
    elements = elements.filter((num) => typeof num === "number");
    if (elements.length === 0) {
        return "There is not any number in the array";
      } else {
    for(let i=0;i<elements.length;i++){
       total = total + elements[i];
    }}
    return total;

}

module.exports = sum;
