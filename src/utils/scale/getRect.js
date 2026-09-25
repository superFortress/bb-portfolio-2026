// E X P O R T

// Get rect
// ==> Optional mutation through callback
function measureRect(reference, callback = null) {
    const element = reference?.current || reference || null;
    const rectangle = element?.getBoundingClientRect() || null;
    const measurement = {
        x: rectangle?.x || 0,
        y: rectangle?.y || 0,
        width: rectangle?.width || 0,
        height: rectangle?.height || 0
    };
    return callback
        ? callback(element, measurement)
        : measurement;
}

export default measureRect;