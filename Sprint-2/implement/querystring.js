function parseQueryString(queryString) {
  const queryParams = {};

  // if the input is empty return an object
  if (queryString.length === 0) {
    return queryParams;
  }

  // find & and divide words and put into the array 
  const keyValuePairs = queryString.split("&");


  for (const pair of keyValuePairs) {

    
//  to check = sign in the string
    function isEqualsSign (string) {
      if (string === "=")
      {
        return true;
      }
    }
// find the first = sign in the string divided the words and get the value into a new array 
    const index = pair.split('').findIndex(isEqualsSign)

    // get the string start after the equal sing and store in value variable
    let value = pair.slice (index+1);

    //get the string from start to before = sign and store in kay variable 
    let key = pair.slice(0,index);

    // add the key value from the array to object 
    queryParams[key]= value;

  }

  return queryParams;
}

const query = "equation=x=y+1";
console.log (parseQueryString(query));

module.exports = parseQueryString;
