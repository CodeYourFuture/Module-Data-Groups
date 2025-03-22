function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const index = pair.indexOf("=");
    let key, value;

    if (index > -1) {
      key = pair.slice(0, index);
      value = pair.slice(index + 1);
    } else {
      key = pair; // No "=" found; it's a key without a value.
      value = "";
    }

    queryParams[key] = decodeURIComponent(value || "");
  }

  return queryParams;
}

module.exports = parseQueryString;
