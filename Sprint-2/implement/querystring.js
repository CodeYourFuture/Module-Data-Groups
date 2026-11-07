function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  let keyValuePair = keyValuePairs;
  if (queryString.includes("+")) {
    keyValuePair = keyValuePairs.map((keyValuePair) =>
      keyValuePair.replaceAll("+", " ")
    );
  } else if(queryString.includes("%")) {
    keyValuePair = keyValuePairs.map((keyValuePair) =>
      decodeURIComponent(keyValuePair))
  }; 
  
  for (const pair of keyValuePair) {
    if (pair === "") continue;
    const eqIndex = pair.indexOf("=");
    if (eqIndex === -1) {
      queryParams[pair] = "";
    } else {
      const key = pair.slice(0, eqIndex);
      const value = pair.slice(eqIndex + 1);
      queryParams[key] = value;
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
