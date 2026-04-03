function parseQueryString(queryString) {
  if (typeof queryString !== "string") {
    throw new Error("Input must be a string");
  }

  const queryParams = {};

  if (queryString.trim().length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const separatorIndex = pair.indexOf("=");

    if (separatorIndex <= 0 || separatorIndex === pair.length - 1) {
      throw new Error(
        "String must contain both a key and a value separated by '='"
      );
    }

    const key = pair.slice(0, separatorIndex).trim();
    const value = pair.slice(separatorIndex + 1).trim();

    if (key.length === 0 || value.length === 0) {
      throw new Error("Neither the key nor value can be purely whitespace");
    }

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
