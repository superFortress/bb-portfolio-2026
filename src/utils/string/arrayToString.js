// I M P O R T

// Utils
import capitalize from '../string/capitalize.js'

// E X P O R T

// Array to string
// ==> Join Array entries in punctuated String
function arrayToString(array, capitalizeAll = false) {
    // Capitalize entries
    if (capitalizeAll) array = array.map((entry) => capitalize(entry, false));
    // If single entry, return
    if (array.length === 1) return array[0];
    // Combine entries into string
    const lastEntry = ' & ' + array.pop();
    const string = array.join(', ') + lastEntry;
    return string;
}

export default arrayToString;