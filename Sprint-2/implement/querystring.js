function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    let key, value;

    if (index === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, index);
      value = pair.slice(index + 1);
    }
    queryParams[key] = value;
  }

  return queryParams;
}


module.exports = parseQueryString;
