function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }

    const indexOfEquals = pair.indexOf("=");
    let key;
    let value;

    if (indexOfEquals === -1) {
      // no "=", treat whole pair as key with empty value
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, indexOfEquals);
      value = pair.slice(indexOfEquals + 1);
    }

    queryParams[key] = value;
  }

  return queryParams;
}


module.exports = parseQueryString;
