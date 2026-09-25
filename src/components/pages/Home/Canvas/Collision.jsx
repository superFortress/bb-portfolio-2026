// I M P O R T

// Modules
import { Events } from 'matter-js';
import { useEffect } from 'react';

// Utils
import randomEntry from '#utils/random/randomEntry.js';

// E X P O R T

export default function CanvasCollision({

    // Element
    colorArray = [],

    // Matter
    engine = null

}) {

    // F U N C T I O N

    const manageCollision = (event) => event.pairs.forEach((pair) => {

        // Both bodies must be either shape or title
        const { bodyA, bodyB } = pair;
        if (!['shape', 'title'].includes(bodyA.label)) return;
        if (!['shape', 'title'].includes(bodyB.label)) return;

        // Pick color that neither body has
        let color = randomEntry(colorArray);
        while (bodyA.color === color || bodyB.color === color) {
            color = randomEntry(colorArray);
        }

        // Apply color
        [bodyA, bodyB].forEach((body) => body.color = color);

    });

    // E F F E C T

    useEffect(() => {
        Events.on(engine, 'collisionEnd', manageCollision);
        return () => Events.off(engine, 'collisionEnd', manageCollision);
    }, []);

}