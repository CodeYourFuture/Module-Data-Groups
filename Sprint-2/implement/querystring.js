function parseQueryString(queryString) {
  const queryParams = {};

  // If the query string is empty, return an empty object
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split the query string into individual key-value pairs
  const keyValuePairs = queryString.split("&");

  // Iterate over the key-value pairs
  for (const pair of keyValuePairs) {
    if(pair === "") continue;

    const [key, ...valueParts] = pair.split("=");  // Split only at the first "="
    let value;

    if (valueParts.length > 0) {
      // If there are value parts, join them and decode
      value = valueParts.join("=");
    } else {
      // If no value parts, set value to undefined
      value = "";
    }

    // Decode both the key and value (key should be decoded as well if needed)
    queryParams[decodeURIComponent(key)] = value !== undefined ? decodeURIComponent(value) : value;
  }

  return queryParams;
}

module.exports = parseQueryString;

console.log(parseQueryString("equation=x=y+1"));  
console.log(parseQueryString("equation=x=y+1&answer=2=3")); 
console.log(parseQueryString("key1=&key2=value2&key3=")); 
console.log(parseQueryString("key=")); 
console.log(parseQueryString("key1&key2=value2")); 

module.exports = parseQueryString;
