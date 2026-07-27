function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&").filter(item=>item!=='');

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
