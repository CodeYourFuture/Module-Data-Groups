function parseQueryString(queryString) {
  const queryParams = {};

  if (queryString.length === 0) {
    return queryParams;
  }

  if (queryString.includes("&")) {
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
      if (!pair.includes("=")) {
        throw new Error(
          "error invalid format string, no = to separate key value pairs"
        );
      } else {
        const keyValuePair = pair.split("=");
        console.log(keyValuePair + "the single pair");

        queryParams[keyValuePair[0]] = keyValuePair[1];
      }
    }
  } else if (queryString.includes("=")) {
    const equalSignIndex = queryString.indexOf("=");

    queryParams[queryString.slice(0, equalSignIndex)] = queryString.slice(
      equalSignIndex + 1
    );
  } else {
    throw new Error(
      "error invalid format string, no = to separate key value pairs"
    );
  }

  return queryParams;
}

module.exports = parseQueryString;
