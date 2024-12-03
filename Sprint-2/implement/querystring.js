function parseQueryString(queryString) {
  console.log(typeof queryString);

  
  
  if(typeof queryString !== 'string' ){
    throw new Error('invalid input')
  }

  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  if (!queryString.includes("=")) {
    throw new Error("invalid query string format");
  }
  
  
  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);
  

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
