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
      queryParams[pair] = "";
      continue;
    }

    const equalsIndex = pair.indexOf("=");
    const key = decodeURIComponent(
      pair.slice(0, equalsIndex).replace(/\+/g, " ")
    );

    const value = decodeURIComponent(
      pair.slice(equalsIndex + 1).replace(/\+/g, " ")
    );

    if (queryParams[key] === undefined) {
      queryParams[key] = value;
    } else if (Array.isArray(queryParams[key])) {
      queryParams[key].push(value);
    } else {
      queryParams[key] = [queryParams[key], value];
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
