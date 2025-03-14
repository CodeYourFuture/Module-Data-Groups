function createLookup(givenArray) {
  if (givenArray.every(item => Array.isArray(item) && item.length === 2)){
    const countryCurrency ={};
    for (const item of givenArray){
      if (item[0] ==="" || item[1] === ""){
        continue;
      }
      countryCurrency[item[0]] = item[1]
    }
    return countryCurrency;
  } else return "Wrong input! should be an array  of 2 item arrays"
}

const test = [
  ["", "USD"],
  ["CA", ""],
];

console.log(createLookup(test))

module.exports = createLookup;
