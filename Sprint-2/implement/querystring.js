function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString === "") {
    return queryString;
  }
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&").filter((pair) => pair !== "");

  for (const pair of keyValuePairs) {
    const indexFirstEqual = pair.indexOf("=");

    let key;
    let value;

    if (indexFirstEqual === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, indexFirstEqual);
      value = pair.slice(indexFirstEqual + 1);
    }

    key = decodeURIComponent(key.replace(/\+/g, " "));
    value = decodeURIComponent(value.replace(/\+/g, " "));

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
