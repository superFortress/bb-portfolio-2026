// I M P O R T

// Modules
import { Bodies, World } from 'matter-js';
import { useEffect, useRef } from 'react';

// E X P O R T

export default function Container({

    // Geometry
    canvasFrame = {},
    client = {},

    // Matter
    engine = null

}) {

    // A S S I G N

    // Reference
    const bodyArrayRef = useRef([]);

    // F U N C T I O N

    const createBodies = () => {

        // Configuration
        const bodyWidth = 20;

        // Properties
        const canvas = { ...canvasFrame };

        // Create floor
        const floor = (() => {
            // Properties
            const width = canvas.width * 1.5;
            const height = bodyWidth;
            const x = canvas.width / 2;
            const y = canvas.height
                + bodyWidth / 2;
            // Create
            return Bodies.rectangle(
                x, y, width, height, {
                // Settings
                isStatic: true,
                collisionFilter: {
                    category: 0x1,
                    mask: 0x2 | 0x4 | 0x8 | 0x10
                },
                render: {
                    visible: false
                }
            });
        })();

        // Create walls
        const [wallLeft, wallRight] = [1, 0].map((left) => {
            // Properties
            const width = bodyWidth;
            const height = canvas.height;
            const x = client.onDesktop
                ? canvas.width * (left ? -0.1 : 1.1)
                : canvas.width * (left ? -0.25 : 1.25);
            const y = canvas.height / 2;
            // Create
            return Bodies.rectangle(
                x, y, width, height, {
                // Settings
                isStatic: true,
                collisionFilter: {
                    category: 0x1,
                    mask: 0x2 | 0x4 | 0x8 | 0x10
                },
                render: {
                    visible: false
                }
            });
        });

        // Employ bodies
        const bodies = [floor, wallLeft, wallRight];
        World.remove(engine.world, bodyArrayRef.current);
        World.add(engine.world, bodies);
        bodyArrayRef.current = bodies;

    };

    // E F F E C T

    // Create new container
    useEffect(() => {
        createBodies();
    }, [canvasFrame, client]);

}