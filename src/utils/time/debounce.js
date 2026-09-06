// E X P O R T

// Debounce
// ==> Run callback after/before time has passed
function debounce(callback, delay = 300, after = true, before = false) {
    let timeout = null;
    // Wrap callback in debounce
    const debouncedCallback = (...args) => {
        // Run callback before timeout
        if (before && !timeout) callback(...args);
        // Run callback after timeout
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (after) callback(...args);
        }, delay);
    };
    // Add cancel method
    debouncedCallback.cancel = () => {
        clearTimeout(timeout);
        timeout = null;
    };
    // Return new function
    return debouncedCallback;
}

export default debounce;