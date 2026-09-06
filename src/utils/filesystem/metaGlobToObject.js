// I M P O R T

// Utils
import pathToArray from '../filesystem/pathToArray.js';
import toCamelCase from '../string/toCamelCase.js';

// E X P O R T

// Meta.glob to Object
// ==> Store directory paths as keys
// ==> Store file paths as values
function metaGlobToObject(metaGlob, pathLength = 1) {
    const directoryObject = {};
    for (let path in metaGlob) {
        const array = pathToArray(path, pathLength);
        const key = toCamelCase(array);
        const value = metaGlob[path].default || metaGlob[path];
        directoryObject[key] = value;
    }
    return directoryObject;
}

export default metaGlobToObject;