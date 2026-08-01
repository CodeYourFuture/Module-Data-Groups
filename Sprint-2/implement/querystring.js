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

    const separatorIndex = pair.indexOf("=");
    let key;
    let value;

    if (separatorIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, separatorIndex);
      value = pair.slice(separatorIndex + 1);
    }

    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

