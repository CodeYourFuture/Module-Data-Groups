function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) return queryParams;

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // skip empty pairs (e.g. &&)
    if (pair === "") continue;

    const index = pair.indexOf("=");

    let key, value;

    if (key === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.substring(0, index);
      value = pair.substring(index + 1);
    }

    // decoding URL
    try {
      key = decodeURIComponent(key);
      value = decodeURIComponent(value);
    } catch (error) {
      
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
