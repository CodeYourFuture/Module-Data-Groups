function createLookup(givenArray) {
  if (givenArray.every(item => Array.isArray(item) && item.length === 2)){
    const countryCurrency ={};
    for (const item of givenArray){
      countryCurrency[item[0]] = item[1]
    }
    return countryCurrency
  } else return "Wrong input! should be an array  of 2 item arrays"
}

module.exports = createLookup;
