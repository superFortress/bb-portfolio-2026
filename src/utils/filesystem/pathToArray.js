// E X P O R T

// Path to Array
// ==> Separate folders and files
function pathToArray(path, pathLength = 0, removeExtension = true) {
    // Split by folder
    let array = path.split(/[\\/]+/).filter(Boolean);
    // Cut to desired length
    if (pathLength > 0)
        array = array.slice(array.length - pathLength);
    // Remove extension, skip hidden files
    if (removeExtension && array.length) {
        const index = array.length - 1;
        array[index] = array[index].replace(/^(.+)\.[^/.]+$/, '$1');
    }
    return array;
}

export default pathToArray;