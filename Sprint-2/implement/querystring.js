function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    let key = "",
      value = "";
    let equalSignIndex = pair.indexOf("=");

    if (equalSignIndex === -1) {
      key = decodeURIComponent(pair);
      value = "";
    } else {
      key = decodeURIComponent(pair.slice(0, equalSignIndex));
      value = decodeURIComponent(pair.slice(equalSignIndex + 1));
    }

    if (key === "" && value === "") continue;
    if (queryParams[key]) {
      if (queryParams[key] === value) continue;
      if (Array.isArray(queryParams[key])) {
        queryParams[key].push(value);
      } else {
        const temp = queryParams[key];
        queryParams[key] = [temp, value];
      }
    } else queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
