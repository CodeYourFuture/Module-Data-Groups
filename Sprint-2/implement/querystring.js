function parseQueryString(queryString) {
  const queryParams = {};

  if (typeof queryString !== "string") {
    throw new Error("Input must be a string");
  }

  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Split the pair on the first "=" to separate the key and value
    const [key, ...value] = pair.split("=");
    queryParams[key.trim()] = value.join("=").trim();
  }

  return queryParams;
}

module.exports = parseQueryString;
