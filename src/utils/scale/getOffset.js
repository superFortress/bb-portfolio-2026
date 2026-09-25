// E X P O R T

// Get offset
// ==> Optional mutation through callback
function getOffset(reference, callback = null) {
    const element = reference?.current || reference || null;
    const measurement = {
        x: element?.offsetLeft || 0,
        y: element?.offsetTop || 0,
        width: element?.offsetWidth || 0,
        height: element?.offsetHeight || 0
    };
    return callback
        ? callback(element, measurement)
        : measurement;
}

export default getOffset;