function parseQueryString(queryString) {// function with a queryString parameter
  const queryParams = {};// an empty object to be used later
  if (queryString.length === 0) {// if condition checks the empty string and return empty object 
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");// here it splits the string into key pair value

  for (const pair of keyValuePairs) {// for loop 
    // const [key, value] = pair.split("=", 2); //pair.split("=", 2) allos to split only on the first =, this way any = symbol that appears in the value part is preseved, the 2 in split ("=",2) tells to split string into exactly two parts, the key and the value
    const [key, ...valueParts] = pair.split("="); // Use rest operator to capture the entire value
    const value = valueParts.join("="); // Re-join any '=' in the value
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
