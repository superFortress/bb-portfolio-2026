// I M P O R T

// Modules
import { Engine, Render, Runner } from 'matter-js';
import { useCallback, useEffect, useRef } from 'react';

// E X P O R T

// Use matter
// ==> Start matter environment in canvas
// ==> Return matter engine
// ==> Return useUpdate hook that calls after each update
function useMatter(

    canvasRef = null,
    { width, height } = {},
    dependencies = []

) {

    // A S S I G N

    // References
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);
    const updateRef = useRef(null);
    const subscribersRef = useRef(new Set());

    // D E F I N E

    if (engineRef.current === null)
        engineRef.current = Engine.create();

    // F U N C T I O N

    // Add callback to subscribers
    const subscribe = useCallback((callback) => {
        subscribersRef.current.add(callback);
        return () => subscribersRef.current.delete(callback);
    }, []);

    // Subscribe to update cycle
    const useUpdate = (callback) => useEffect(() => {
        return subscribe(callback);
    }, [callback, subscribe]);

    // E F F E C T

    // Create matter
    useEffect(() => {

        // Create render
        if (!canvasRef?.current) return;
        const canvas = canvasRef.current;
        const engine = engineRef.current;
        const render = Render.create({
            canvas,
            engine,
            options: {
                ...(width && { width }),
                ...(height && { height }),
                background: 'transparent',
                pixelRatio: 'auto',
                wireframes: false
            }
        });

        // Create runner
        const runner = Runner.create();
        const update = (time) => {
            Runner.tick(runner, engine, time);
            Render.world(render);
            subscribersRef.current.forEach((callback) => callback(engine));
            updateRef.current = requestAnimationFrame(update);
        };

        // Manage render
        renderRef.current = render;
        runnerRef.current = runner;
        updateRef.current = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(updateRef.current);
            Render.stop(render);
            Runner.stop(runner);
            render.canvas = null;
            render.context = null;
            render.textures = {};
        };

    }, [canvasRef, ...dependencies]);

    // Reset on canvas rerender
    useEffect(() => {
        if (!width || !height) return;
        if (!renderRef?.current) return;
        Render.setSize(renderRef.current, width, height);
    }, [width, height]);

    // R E T U R N

    return {
        engine: engineRef.current,
        useUpdate
    };

}

export default useMatter;