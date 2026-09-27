// I M P O R T

// Utils
import metaGlobToObject from '#utils/filesystem/metaGlobToObject.js';

// E X P O R T

export const icon = metaGlobToObject(import.meta.glob(
    '/src/assets/vector/icons/*.svg',
    { eager: true }
));

export const media = metaGlobToObject(import.meta.glob(
    '/src/assets/vector/media/*.svg',
    { eager: true }
));

export const ui = metaGlobToObject(import.meta.glob(
    '/src/assets/vector/ui/*.svg',
    { eager: true }
));