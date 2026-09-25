// I M P O R T

// Function
import getType from '../parse/getType';

// E X P O R T

// Random entry
// ==> Return random entry from array or object
function randomEntry(object) {
    if (!getType(object, 'array', 'object')) return null;
    const array = Array.isArray(object) ? object : Object.values(object);
    const index = Math.floor(Math.random() * array.length);
    const entry = array[index];
    return entry;
};

export default randomEntry;