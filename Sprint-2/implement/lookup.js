function createLookup() {
  // implementation here

function createLookup(currencyCodes) {
  const createdObject = {};
  let createdArray = [];
  for (let i = 0; i < currencyCodes.length; i++) {
    createdArray = currencyCodes[i];
    console.log(createdArray);
    const splitArray = createdArray.map((element) => [element]); //splits an array to arrayes of its elements

    const key = splitArray[0].join(); //converts an array to a string
    const value = splitArray[1].join(); ////converts an array to a string
    createdObject[key] = value;
  }
  return createdObject;
}
//console.log(
  //createLookup([
   // ["US", "USD"],
    //["UK", "GB"],
  //])
//);


module.exports = createLookup;
