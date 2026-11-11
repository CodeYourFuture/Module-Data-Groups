function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  const newQueryStr = queryString.replaceAll("+", " ");
  const keyValuePairs = newQueryStr.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    }

    const separateIndex = pair.indexOf("=");

    let key;
    let value;

    if (separateIndex === -1) {
      key = pair;
      value = "";
    } else {
      key = pair.slice(0, separateIndex);
      value = pair.slice(separateIndex + 1);
    }
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);

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
