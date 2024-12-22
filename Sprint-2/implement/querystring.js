function parseQueryString(queryString) {
  console.log(typeof queryString);

  if (typeof queryString !== "string") {
    throw new Error("invalid input");
  }

  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  if (!queryString.includes("=")) {
    throw new Error("invalid query string format");
  }

  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);

  for (const pair of keyValuePairs) {
    console.log(pair);
    if (!pair) continue;

    const [key, value] = pair.split("=");
    console.log(key);
    console.log(value);
    if (!key) {
      throw new Error("invalid query string format");
    }

    queryParams[decodeURIComponent(key)] = value
      ? decodeURIComponent(value)
      : "";
  }

  return queryParams;
}

module.exports = parseQueryString;
