function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair.includes("=") && pair.length > 0) {
      queryParams[pair] = "";
      continue;
    }

    const key = decodeURIComponent(pair.slice(0, pair.indexOf("="))).replace(
      "+",
      " "
    );
    const value = decodeURIComponent(pair.slice(pair.indexOf("=") + 1)).replace(
      "+",
      " "
    );

    if (pair.indexOf("=") !== -1) {
      queryParams[key] = value;
    }

    if (key.length === 0 && value.length === 0) {
      continue;
    }

    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("full+name=John+Doe"));

module.exports = parseQueryString;
