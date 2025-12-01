function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {

    const idx = pair.indexOf("=");
   
    if (idx === -1) {
      // No '=' found, treat entire pair as key with empty value
      queryParams[pair] = "";
    } else {
    const key = pair.substring(0, idx);
      const value = pair.substring(idx + 1);
    queryParams[key] = value;
  }

  return queryParams;
}
}

module.exports = parseQueryString;
