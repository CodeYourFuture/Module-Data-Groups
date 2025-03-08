function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    //const [key, value] = pair.split("=");
    if (pair.indexOf("=") !== -1){
      const key = pair.slice(0, pair.indexOf("="))
      const value = pair.slice(pair.indexOf("=")+1)
      queryParams[key] = value;
    }else {
      const key = pair
      queryParams[key] = ""
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
