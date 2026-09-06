// E X P O R T

// To camelCase
// ==> Takes both Arrays and Strings
// ==> Split at spaces and special characters
// ==> Use callback to parse substring
function toCamelCase(value, callback = null) {
    const parse = (string) => callback ? callback(string) : string;
    const split = (string) => typeof string === 'string'
        ? string.split(/[^\p{L}\p{M}\p{N}]+/gu).filter(Boolean)
        : [];
    const array = Array.isArray(value)
        ? value.flat(Infinity).flatMap((string) => split(string))
        : split(value);
    const string = array.map((entry, index) => index
        ? parse(entry[0].toUpperCase() + entry.substring(1))
        : parse(entry[0].toLowerCase() + entry.substring(1))
    ).join('');
    return string;
}

export default toCamelCase;