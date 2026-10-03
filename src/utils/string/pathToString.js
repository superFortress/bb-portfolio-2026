// I M P O R T

// Function
import pathToArray from '../filesystem/pathToArray.js'

// E X P O R T

// Path to String
// ==> Add path entries to String
function pathToString(path, pathLength = 0, capitalize = false) {
    let string = pathToArray(path, pathLength).join(' ');
    if (capitalize) string = string[0].toUpperCase() + string.substring(1);
    return string;
}

export default pathToString;