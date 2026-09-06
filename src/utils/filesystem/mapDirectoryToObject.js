// I M P O R T

// Modules
import fs from 'fs';
import path from 'path';

// Utils
import toCamelCase from '../string/toCamelCase.js';

// E X P O R T

// Map directory to Object
// ==> Turn folders into embedded objects
// ==> Turn files into paths
function mapDirectoryToObject(absolutePath, pathCallback) {

    // Map through directory entries
    const mapDirectory = (relativePath) => {

        const entryPath = path.join(absolutePath, relativePath);
        const entryArray = fs.readdirSync(entryPath, { withFileTypes: true });
        return entryArray.reduce((directoryObject, entry) => {

            // Create entry key
            const entryExtension = path.extname(entry.name) || '';
            const entryName = path.basename(entry.name, entryExtension);
            const entryKey = toCamelCase(entryName);

            // Skip hidden files
            if (entry.name.startsWith('.')) return directoryObject;

            // Map through embedded directory
            if (entry.isDirectory()) {
                const newRelativePath = path.join(relativePath, entry.name);
                const newDirectoryObject = mapDirectory(newRelativePath);
                if (Object.keys(newDirectoryObject).length)
                    directoryObject[entryKey] = newDirectoryObject;
            }

            // Store file path
            if (entry.isFile()) {
                const entryValue = pathCallback
                    ? pathCallback(path.posix.join(relativePath, entry.name))
                    : path.posix.join(relativePath, entry.name);
                if (entryValue) directoryObject[entryKey] = entryValue;
            }

            // Return Object with changes
            return directoryObject;

        }, {});

    };

    // Start at top directory
    const directoryObject = mapDirectory('');
    return directoryObject;

}

export default mapDirectoryToObject;