// E X P O R T

// Throttle
// ===> Run callback on intervals
function throttle(callback, delay = 1000 / 60) {
    let lastCall = 0;
    return (...args) => {
        const currentCall = Date.now();
        if (currentCall - lastCall < delay) return;
        lastCall = currentCall;
        callback(...args);
    };
}

export default throttle;