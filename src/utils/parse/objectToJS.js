// I M P O R T

// Utils
import getType from '../parse/getType.js';

// E X P O R T

// Object to JS
// ==> Turn keys and values into JavaScript compatible String
function objectToJS(object, indent = 4, level = 1) {
    // Calculate indentation
    const braceIndent = ' '.repeat(indent * (level - 1));
    const entryIndent = ' '.repeat(indent * level);
    // Store values, iterate over Objects
    const entryArray = Object.entries(object).map(([key, value]) => {
        key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
            ? key
            : JSON.stringify(key);
        value = getType(value, 'object')
            ? objectToJS(value, indent, level + 1)
            : JSON.stringify(value);
        return `${entryIndent}${key}: ${value}`;
    });
    // Wrap result inside braces
    return '{'
        + `\n${entryArray.join(',\n')}`
        + `\n${braceIndent}}`;
}

export default objectToJS;