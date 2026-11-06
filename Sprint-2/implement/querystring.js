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

    const eqIndex = pair.indexOf("=");
    let key;
    let value;

    if (eqIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, eqIndex);
      value = pair.slice(eqIndex + 1);
    }

    key = decodeURIComponent(key.replaceAll("+", " "));
    value = decodeURIComponent(value.replaceAll("+", " "));

    if (Object.hasOwn(queryParams, key)) {
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


