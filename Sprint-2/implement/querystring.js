function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  if (queryString.includes("&")) {
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
      let countMatch = 0;

      if (pair.includes("=")) {
        const equalSignIndex = pair.indexOf("=");

        queryParams[pair.slice(0, equalSignIndex)] = pair.slice(
          equalSignIndex + 1
        );
      } else {
        throw new Error(
          "error invalid format string, no = to separate key value pairs"
        );
      }
    }
  }

  if (queryString.includes("=")) {
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

console.log(`with ${parseQueryString("equation=x=y+1")}`);

module.exports = parseQueryString;
