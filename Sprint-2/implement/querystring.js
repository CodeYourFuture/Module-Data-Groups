function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

    keyValuePairs.forEach(pair => {
    const [key, ...valueParts] = pair.split("=");
    const value = valueParts.join("="); 
    queryParams[key] = value;
  });

  return queryParams;
}

module.exports = parseQueryString;
