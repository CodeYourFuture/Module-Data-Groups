function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  if (queryString[0] === "?") {
    queryString = queryString.slice(1);
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const indexToSlice = pair.indexOf("=");

    let key;
    let value;

    if (indexToSlice === -1) {
      key = pair;
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, indexToSlice));
      value = decodeURIComponent(pair.slice(indexToSlice + 1));
    }
    queryParams[key] = value;
  }

  return queryParams;
}

parseQueryString("aloneKey");

module.exports = parseQueryString;
