function createLookup(arr) {

  arr.forEach((innerArr, outerArrIndex) => {
      
    if(!/^[A-Z]{2}$/i.test(innerArr[0])) {
      throw new Error(`Inner arrays must have a country code of length 2 at index 0. Problem at outer array index ${outerArrIndex}.`);
    }

    if(!/^[A-Z]{3}$/i.test(innerArr[1])) {
      throw new Error(`Inner arrays must have a currency code of length 3 at index 1. Problem at outer array index ${outerArrIndex}.`);
    }

    if(innerArr.length > 2) {
      console.warn(`Only the first two items of each inner array will be used to create the object, any other data will be ignored. Inner array at outer array index ${outerArrIndex} contains data which will be ignored.`);
    }

    // console.warn(`A tricksy extra warning message`); //was used to test that the console.warn() test only passes if the correct warning is given. testing tests?! gee XD

  })

  return Object.fromEntries(arr);
}

module.exports = createLookup;



/*
// FUNCTION HISTORY - I wanted to practice solving this in different ways to see which is best

// with a while loop

let i =0;
while (i<arr.length) {
  if(arr[i].length !== 2) {
    throw new Error("Inner arrays must have length 2 to be used for object creation");
  };
  i++;
}



// with a for...of loop

for (let i of arr) {
  if (i.length!==2){
    throw new Error("Inner arrays must have length 2 to be used for object creation");
  }
}



*/