function parseQueryString(queryString) {
  

  
  
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

  

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
