function contains(value, prop) {
    const isObject = (value) => {
        return typeof value === 'object'
        && value !== null
        && !Array.isArray(value)
        && !(value instanceof RegExp)
        && !(value instanceof Date)
        && !(value instanceof Set)
        && !(value instanceof Map)
    }
    if (!isObject(value)) {
        return false;
    } return value.hasOwnProperty(prop);
}
