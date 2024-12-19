function parseQueryString(queryString) {
  //object to store the key value pairs
  const queryParams = {};

  //if given a non-string input

  if (typeof queryString !== "string") {
    return queryParams
  }

  //the info after the ? is needed
  //const neededInfo = queryString.split("?");
  //the key value pairs are split on the needed info
  //or theres possibly just one keyValueString info
  //all the key value info will go to index 1 of the array
  //further split it by the ampersand
  //Had to use a ternanry operator to condense code and make it more understandable
  const keyValueString = queryString.includes("?") ? queryString.split("?")[1] : queryString;


  if (keyValueString.length === 0) {
    //return empty object for empty string
    return queryParams;
  }

  const keyValuePairs = keyValueString.split("&");
  for (const pair of keyValuePairs) {

    //to pass certain tests with multiple equal signs we need to identify the 1st =

    const indexOfEqualSign = pair.indexOf("=");
    //-1 indicates an index that is not present
    //if there's no = the given pair is treated as the key and the value is " "
    if (indexOfEqualSign === -1) {
      queryParams[pair] = "";
    }
    else {
      //GPT recommended using substring instead of spliting things and making it complicated
      //can use substring to extract everything before the index of the first equal sign
      const key = pair.substring(0, indexOfEqualSign);
      //use substring to get the value which is everything after the 1st equal sign, even if it is other equal signs
      const value = pair.substring(indexOfEqualSign + 1);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

// console.log(parseQueryString("https://example.com/widgets?colour=blue&sort=newest"));
// console.log(parseQueryString(""));
// console.log(parseQueryString("https://example.com/widgets?colour=red"));
console.log(parseQueryString("equation=x=y+1"))
module.exports = parseQueryString;
