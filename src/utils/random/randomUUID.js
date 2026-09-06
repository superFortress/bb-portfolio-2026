// E X P O R T

// Random UUID
// ==> Create unique ID
// ==> Includes polyfill
function randomUUID() {
    return crypto?.randomUUID?.() ||
        Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
};

export default randomUUID;