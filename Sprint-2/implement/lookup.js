function createLookup(pairs) {
  const lookup = {};
  for (let i = 0; i < pairs.length; i++) {
    const [country, currency] = pairs[i];
    lookup[country] = currency;
  }
  return lookup;
}
  
module.exports = createLookup;

/*const pair = [['US','USD'],['CA','CAD']]
  const firstpair = pair[0]
  let country1 = firstpair[0]
  let currency1 = firstpair[1]
  console.log("First country:", country1);     // US
  console.log("First currency:", currency1); 

  const secondPair= pair[1]
  let country2 = secondPair[0]
  let currency2 = secondPair[1]
  console.log("Second country:", country2);    // CA
  console.log("Second currency:", currency2);
}
*/