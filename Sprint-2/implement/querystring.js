function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString
    .replace(/\+/g, " ")
    .split("&")
    .filter((pair) => pair !== "");

  for (const pair of keyValuePairs) {
    const indexFirstEqual = pair.indexOf("=");
    let key, value;
    if (indexFirstEqual === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      ((key = decodeURIComponent(pair.slice(0, indexFirstEqual))),
        (value = decodeURIComponent(pair.slice(indexFirstEqual + 1))));
    }
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
