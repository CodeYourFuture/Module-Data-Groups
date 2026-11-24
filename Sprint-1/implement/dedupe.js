function dedupe(array) {
    if (array.length == 0)
        return array;

   const result = array.filter((number, index) => {
     return array.indexOf(number) === index;
   });
    return result;


}

module.exports = dedupe;