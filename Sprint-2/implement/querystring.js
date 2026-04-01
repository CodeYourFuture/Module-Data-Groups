function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.trim() === "" ) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for(const pair of keyValuePairs){
    if(!pair) continue; 
  
    const [key, ...rest] = pair.split("=");

    const value = rest.join("=");

    if (key) {

      const decodedKey = decodeURIComponent(key.replace(/\+/g, " "));
      const decodedValue = decodeURIComponent(value.replace(/\+/g, " "));
      queryParams[decodedKey] = decodedValue;
    }

  }
  return queryParams;
}

module.exports = parseQueryString;
