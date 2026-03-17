
function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString || typeof queryString !== "string") {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) continue;

    const index = pair.indexOf("=");

    let key, value;

    if (index === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, index);
      value = pair.slice(index + 1);
    }

    if (key) {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;