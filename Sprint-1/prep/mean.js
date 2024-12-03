

function calculateMean(){
    const list = [3, 50, 7];
    const sum = list[0] + list[1] + list[2];
    const mean = sum / list.length;
      return mean;

};
console.log(`The mean of the list [3, 50, 7] is ${calculateMean()}`);

//The mean of the list [3, 50, 7] is 20

module.exports = calculateMean;
