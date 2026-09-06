// E X P O R T

// Get type
// ==> Return type, including different Object types
function getType(value, ...typeArray) {
    const type =
        value === null ? 'null' :
            value === undefined ? 'undefined' :
                Array.isArray(value) ? 'array' :
                    typeof value;
    return typeArray.length ? typeArray.includes(type) : type;
}

export default getType;