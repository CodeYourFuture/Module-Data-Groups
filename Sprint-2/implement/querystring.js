function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  if (queryString.includes("%")) {
    queryString = decodeURIComponent(queryString);
  }
  if (queryString.includes("+")) {
    queryString = queryString.replaceAll("+", " ");
  }
  //const arrayValue = [];
  let key = "";
  let value = "";

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.length === 0) {
      continue;
    }
    const separatorIndex = pair.indexOf("=");
    if (separatorIndex === 0) {
      value = pair.slice(separatorIndex + 1);
    } else if (separatorIndex === pair.length - 1) {
      key = pair.slice(0, separatorIndex);
    } else if (!pair.includes("=")) {
      key = pair;
    } else {
      key = pair.slice(0, separatorIndex);
      value = pair.slice(separatorIndex + 1);
    }
    if (!queryParams[key]) {
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
