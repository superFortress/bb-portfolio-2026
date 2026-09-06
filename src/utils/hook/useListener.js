// I M P O R T

// Modules
import { useEffect } from 'react';

// E X P O R T

// Use listener
// ==> Mount and unmount listener
function useListener(element, listener, callback) {
    useEffect(() => {
        if (!element) return;
        const node = element.current || element;
        node.addEventListener(listener, callback);
        return () => node.removeEventListener(listener, callback);
    }, [element, listener, callback]);
}

export default useListener;