// E X P O R T

// Capitalize
// ==> Capitalize one or all words in String
function capitalize(string, capitalizeAll = false) {
    const array = capitalizeAll ? string.split(' ') : [string];
    const capitalizedString = array.map((entry) => (
        entry[0].toUpperCase() + entry.substring(1).toLowerCase()
    )).join(' ');
    return capitalizedString;
}

export default capitalize;