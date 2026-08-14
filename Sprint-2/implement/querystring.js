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

    const checkSeparator = pair.indexOf("=");

    let key;
    let value;

    if (checkSeparator === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, checkSeparator);
      value = pair.slice(checkSeparator + 1);
    }

    key = key.replace(/\+/g, " ");
    value = value.replace(/\+/g, " ");

    key = decodeURIComponent(key);
    value = decodeURIComponent(value);

    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        queryParams[key] = [queryParams[key], value];
      }
    } else {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;