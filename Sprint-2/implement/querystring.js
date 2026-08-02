function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  queryString = queryString.replace(/\+/g, " ");
  const keyValuePairs = queryString.split("&");
  for (const pair of keyValuePairs) {
    if (pair === "") {
      continue;
    }
    let key;
    let value;
    const index = pair.indexOf("=");
    if (index === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, index));
      value = decodeURIComponent(pair.slice(index + 1));
    }
    if (!queryParams[key]) {
      queryParams[key] = value;
    } else {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
