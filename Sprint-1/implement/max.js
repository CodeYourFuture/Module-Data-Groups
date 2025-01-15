function findMax(elements) {
    if (elements.length === 0) {
        return -Infinity;
    }

    const numericalElement = elements.filter((item) => typeof item === "number");

    if (numericalElement.length === 0) {
        return NaN;
    }

    return Math.max(...numericalElement);
}

//const elements = [ "dog","cat"];
console.log(findMax([NaN]));

module.exports = findMax;
