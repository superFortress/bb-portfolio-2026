// I M P O R T

// Modules
import { useEffect } from 'react';

// E X P O R T

// Use style
// ==> Temporarily set global style
function useStyle(css = '') {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `:root{${css}}`;
        document.head.appendChild(style);
        return () => style.remove();
    }, [css]);
}

export default useStyle;