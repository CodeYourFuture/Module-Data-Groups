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

    if (!pair.includes("=")) {
      const key = decodeURIComponent(pair).replace("+", " ");
      queryParams[key] = "";
    } else {
      const key = decodeURIComponent(pair.slice(0, pair.indexOf("="))).replace(
        "+",
        " "
      );
      const value = decodeURIComponent(
        pair.slice(pair.indexOf("=") + 1)
      ).replace("+", " ");

      if (Object.keys(queryParams).includes(key)) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = [queryParams[key], value];
        }
      } else {
        queryParams[key] = value;
      }
    }
  }
  return queryParams;
}

module.exports = parseQueryString;
