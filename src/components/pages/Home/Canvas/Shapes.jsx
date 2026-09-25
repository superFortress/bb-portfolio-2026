// I M P O R T

// Modules
import { Bodies, Composite, World } from 'matter-js';
import { useEffect, useRef } from 'react';

// Utils
import randomEntry from '#utils/random/randomEntry.js';

// E X P O R T

export default function Shapes({

    // Element
    colorArray = [],
    imageArray = [],
    shapeBodyMapRef = null,

    // Geometry
    canvasFrame = {},
    client = {},

    // Matter
    engine = null

}) {

    // A S S I G N

    // References
    const creationTimeoutRef = useRef(null);
    const removalIntervalMapRef = useRef(new Map());
    const removalTimeoutMapRef = useRef(new Map());

    // F U N C T I O N

    const createShapes = () => {

        // Configuration
        const decay = client.onDesktop ? 6000 : 4000;
        const force = client.onDesktop ? 0.06 : 0.024;
        const frequency = 1000 / 1.2;
        const friction = client.onDesktop ? 0.3 : 0;
        const inertia = client.onDesktop ? 600 : 1200;
        const scale = client.onDesktop ? 0.75 : 0.55;
        const spread = 0.75;

        // Properties
        const canvas = { ...canvasFrame };

        // Create shape
        const createShape = () => {

            // Properties
            const color = randomEntry(colorArray);
            const group = randomEntry([0x2 | 0x8, 0x4 | 0x8, 0x8]);
            const image = randomEntry(imageArray);
            const mirror = 1 - Math.round(Math.random()) * 2;
            const radius = scale * 30;
            const x = Math.random() * (canvas.width * spread)
                + canvas.width * ((1 - spread) * 0.5);
            const y = canvas.height * -0.1;

            // Create shape
            const shape = Bodies.circle(
                x, y, radius, {
                // Geometry
                alpha: 1,
                color: color,
                image: image,
                label: 'shape',
                scale: scale,
                transform: `scale(${mirror})`,
                width: 60 * scale,
                height: 60 * scale,
                // Physics
                force: { x: Math.random() * force - force / 2, y: 0 },
                friction: friction,
                inertia: inertia,
                mass: 0.5,
                restitution: 1.2,
                // Settings
                collisionFilter: {
                    category: 0x10,
                    mask: 0x1 | 0x10 | group
                },
                render: {
                    visible: false
                }
            });

            // Employ shape
            shapeBodyMapRef.current.set(shape.id, shape);
            World.add(engine.world, shape);

            // Remove shape
            removalTimeoutMapRef.current.set(shape.id, setTimeout(() => {
                // Properties
                const framerate = 1000 / 60;
                const decayDuration = 500;
                const decayFraction = 1 / (decayDuration / framerate);
                // Clean up
                removalTimeoutMapRef.current.delete(shape.id);
                // Fade over time
                removalIntervalMapRef.current.set(shape.id, setInterval(() => {
                    if (shape.alpha > decayFraction) {
                        shape.alpha = shape.alpha - decayFraction;
                    } else {
                        shapeBodyMapRef.current.delete(shape.id);
                        Composite.remove(engine.world, shape);
                        // Clean up
                        const interval = removalIntervalMapRef.current.get(shape.id);
                        removalIntervalMapRef.current.delete(shape.id);
                        clearInterval(interval);
                    }
                }, framerate));
            }, decay));

            // Create shape loop
            const delay = frequency + (Math.random() - 0.5) * 1000;
            creationTimeoutRef.current = setTimeout(createShape, delay);

        };

        // Create shape with timeout
        const delay = frequency + (Math.random() - 0.5) * 1000;
        creationTimeoutRef.current = setTimeout(createShape, delay);

    };

    // E F F E C T

    // Create shapes
    useEffect(() => {
        const timeout = creationTimeoutRef.current;
        if (timeout) clearTimeout(timeout);
        createShapes();
    }, [canvasFrame, createShapes]);

    // Remove shapes
    useEffect(() => () => {
        const timeout = creationTimeoutRef.current;
        if (timeout) clearTimeout(timeout);
        removalIntervalMapRef.current.forEach((value) => clearInterval(value));
        removalIntervalMapRef.current.clear();
        removalTimeoutMapRef.current.forEach((value) => clearTimeout(value));
        removalTimeoutMapRef.current.clear();
    }, []);

}