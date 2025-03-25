function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const firstEqualSign = pair.indexOf("=");  
    if (firstEqualSign === -1) {
      queryParams[pair] = null; 
    } else {
      const key = pair.substring(0, firstEqualSign); 
      const value = pair.substring(firstEqualSign + 1); 
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
