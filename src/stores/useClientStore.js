// I M P O R T

// Modules
import { create } from 'zustand';

// Utils
import debounce from '#utils/time/debounce';

// C O N F I G

const debounceDelay = 150;
const mobileMaxWidth = 767;
const tabletMaxWidth = 1199;

// F U N C T I O N

// Get metrics from client viewport
function measureClient() {

    // Get dimensions
    const { body, documentElement: elem } = document;
    const elemWidth = Math.max(elem.scrollWidth, elem.offsetWidth, elem.clientWidth);
    const bodyWidth = Math.max(body.scrollWidth, body.offsetWidth, elemWidth);
    const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get relative metrics
    const device = viewportWidth > tabletMaxWidth ? 'desktop' :
        viewportWidth > mobileMaxWidth ? 'tablet' : 'mobile';
    const orientation = viewportWidth > viewportHeight ? 'landscape' :
        viewportWidth < viewportHeight ? 'portrait' : 'square';

    // Return metrics
    return {
        aspectRatio: viewportWidth / viewportHeight,
        body: { width: bodyWidth, height: bodyHeight },
        device,
        orientation,
        pixelRatio: window.devicePixelRatio || 1,
        viewport: { width: viewportWidth, height: viewportHeight }
    };

}

// E X P O R T

export const useClientStore = create(() => measureClient());

// L I S T E N

// Update metrics on viewport resize
const handleResize = () => useClientStore.setState(measureClient(), true);
let updateClient = debounce(handleResize, debounceDelay);
window.addEventListener('resize', updateClient);

// Change listener delay
export function setClientDelay(delay) {
    window.removeEventListener('resize', updateClient);
    updateClient.cancel?.();
    updateClient = debounce(handleResize, delay);
    window.addEventListener('resize', updateClient);
}

// Reset listener delay
export function resetClientDelay() {
    window.removeEventListener('resize', updateClient);
    updateClient.cancel?.();
    updateClient = debounce(handleResize, debounceDelay);
    window.addEventListener('resize', updateClient);
}

// HMR: Remove listener on Vite reload
import.meta.hot?.dispose(() => {
    window.removeEventListener('resize', updateClient);
    updateClient.cancel?.();
});