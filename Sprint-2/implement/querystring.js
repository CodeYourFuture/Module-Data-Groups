function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  // Adds percentage-encoded characters
  queryString = decodeURIComponent(queryString);

  // Replaces + with space
  queryString = queryString.replaceAll("+", " ");

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair !== "") {
      let index = pair.indexOf("=");
      if (!pair.includes("=")) {
        index = pair.length;
      }
      const [key, value] = [pair.slice(0, index), pair.slice(index + 1)];
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
