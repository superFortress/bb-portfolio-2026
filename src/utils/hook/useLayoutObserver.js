// I M P O R T

// Modules
import { useEffect, useRef } from 'react';

// Utils
import debounce from '../time/debounce';
import getOffset from '../scale/getOffset';

// E X P O R T

// Use layout observer
// ==> Observe both position and resizing
// ==> Add optional debounce delay
function useLayoutObserver(reference, callback, delay = 0) {
    const lastMeasurement = useRef(null);
    const frameId = useRef(null);
    useEffect(() => {

        // Confirm element
        const element = reference?.current || reference;
        if (!element) return;

        // Add optional delay
        const debounced = delay ? debounce(callback, delay) : callback;

        // Measure and compare
        const loop = () => {
            const measurement = getOffset(element);
            if (// Run callback on first measurement
                lastMeasurement.current === null ||
                // Run callback if measurement has changed
                Object.entries(measurement)
                    .some(([key, value]) => value !== lastMeasurement.current[key])
            ) {
                lastMeasurement.current = { ...measurement };
                debounced(element, measurement);
            }
            frameId.current = requestAnimationFrame(loop);
        };

        // Start and stop loop
        frameId.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(frameId.current);

    }, [reference.current, callback, delay]);
}

export default useLayoutObserver;