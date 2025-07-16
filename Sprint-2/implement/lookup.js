function createLookup(arr) {

  for (let i of arr) {
    if (i.length!==2){
      throw new Error("Inner arrays must have length 2 to be used for object creation");
    }
  }

  return Object.fromEntries(arr);
}

module.exports = createLookup;



/*
// FUNCTION HISTORY

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