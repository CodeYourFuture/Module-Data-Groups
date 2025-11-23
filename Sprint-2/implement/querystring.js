function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) return queryParams;

  const pairs = queryString.split("&");
  
  for (const pair of pairs) {
    const eqIndex = pair.indexOf("=");
    
    let key, value;
    if (eqIndex === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, eqIndex));
      value = decodeURIComponent(pair.slice(eqIndex + 1));
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;