function tally(array) {

    if (!Array.isArray(arr)) {
        throw new Error("tally expects an array!");
    }

    const counts = {}; 

    if (arr.length === 0){

        return counts;
      }
      for (let i = 0; i < arr.length; i++){

        const item = arr[i];

        if (counts[item]) {

            counts[item]= counts[item] + 1;
        } 
        else {
            counts[item]= 1; 
        }
    }
    return counts;
  }

module.exports = tally;
