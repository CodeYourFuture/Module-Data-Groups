function parseQueryString(queryString) {
  const queryParams = {};
  if(!queryString) {
    return queryParams;
  }
    if (queryString.startsWith("?")) {
    queryString = queryString.slice(1);
  }
 
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    if (!pair) continue; 
    const firstEq = pair.indexOf("=");
    let key;
     let value;
    if (firstEq === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, firstEq);
      value = pair.slice(firstEq + 1);
    }
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
