// I M P O R T

// Modules
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Utils
import debounce from '../time/debounce';
import useListener from '../hook/useListener';

// E X P O R T

// Use client
// ==> Get client metrics on window resize
function useClient(callback = null, delay = 150) {

    // Get metrics from client viewport
    const measureClient = useCallback(() => {
        const { body, documentElement: elem } = document;
        const bodyWidth = Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth);
        const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight);
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const nextClient = {
            app: { width: 0 },
            aspectRatio: viewportWidth / viewportHeight,
            body: { width: bodyWidth, height: bodyHeight },
            device:
                viewportWidth >= 1200 ? 'desktop' :
                    viewportWidth >= 768 ? 'tablet' : 'mobile',
            orientation:
                viewportWidth > viewportHeight ? 'landscape' :
                    viewportWidth < viewportHeight ? 'portrait' : 'square',
            pixelRatio: window.devicePixelRatio || 1,
            viewport: { width: viewportWidth, height: viewportHeight }
        };
        nextClient.onDesktop = nextClient.device !== 'mobile';
        nextClient.onMobile = nextClient.device === 'mobile';
        nextClient.app.width =
            nextClient.device === 'mobile' ? bodyWidth - 30 :
                nextClient.device === 'tablet' ? Math.round(bodyWidth * 0.85) :
                    Math.round(Math.min(bodyWidth * 0.65), 1680);
        return nextClient;
    }, []);

    // Update client only when metrics change
    const [client, setClient] = useState(() => measureClient());
    const updateClient = useCallback(() => {
        const nextClient = measureClient();
        setClient((lastClient) => {
            const same =
                lastClient.app.width === nextClient.app.width &&
                lastClient.aspectRatio === nextClient.aspectRatio &&
                lastClient.body.width === nextClient.body.width &&
                lastClient.body.height === nextClient.body.height &&
                lastClient.device === nextClient.device &&
                lastClient.orientation === nextClient.orientation &&
                lastClient.pixelRatio === nextClient.pixelRatio &&
                lastClient.viewport.width === nextClient.viewport.width &&
                lastClient.viewport.height === nextClient.viewport.height;
            return same ? lastClient : nextClient;
        });
    }, [measureClient]);

    // Debounce update client
    const debouncedUpdateClient = useMemo(() => {
        return debounce(updateClient, delay);
    }, [updateClient, delay]);
    useListener(window, 'resize', debouncedUpdateClient);

    // Remove callback from update cycle
    const callbackRef = useRef(callback);
    useEffect(() => { callbackRef.current = callback; }, [callback]);

    // Run callback when metrics change
    useEffect(() => {
        if (callbackRef.current) callbackRef.current(client);
    }, [client]);

    // Return client metrics
    return client;

}

export default useClient;