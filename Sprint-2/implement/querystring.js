function parseQueryString(queryString) {
 
  const queryParams = {};

  if (!queryString.length) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&").filter((pair) => pair.length);

  for (const pair of keyValuePairs) {
 
    let key, value;

    if (pair.indexOf("=") !== pair.lastIndexOf("=")) {
 
      const firstEqualIndex = pair.indexOf("=");
 
      key = pair.substring(0, firstEqualIndex);
      value = pair.substring(firstEqualIndex + 1);
 
    } else {
 
      [key, value] = pair.split("=");
    }
    
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
   
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
