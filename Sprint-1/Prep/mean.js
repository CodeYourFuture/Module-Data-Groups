//function sumValues(list) {
//    let total = 0;

//    total += list[0];
//    total += list[1];
//    total += list[2];
//    total += list[3];
//    total += list[4];
    
//    return total;

//}

//sumValues([1, 2, 3, 4, 5]);

//Why the above is flawed, it is becuase it is not flexible. it strictly takes five numbers


 
//function calculateMean(list) {
//    let total = 0;
//    for (const item of list) {
//      total += item;
//    }
//  }

calculateMean((10, 20, 30, 40, 50));


function calculateMean(list) {
    const middleIndex = math.floor(list.length / 2);
    const median = list.splice(middleIndex,  1)[10];

    return median;
}

module.exports = calculateMean;