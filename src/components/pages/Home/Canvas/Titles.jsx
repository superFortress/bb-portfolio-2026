// I M P O R T

// Modules
import { Bodies, Composite, Constraint, World } from 'matter-js';
import { useEffect, useRef } from 'react';

// E X P O R T

export default function CanvasTitles({

    // Element
    titleBodyMapRef = null,
    titleElemMap = new Map(),

    // Geometry
    bannerFrame = {},
    bannerPoint = {},
    client = {},

    // Matter
    engine = null

}) {

    // A S S I G N

    // Reference
    const anchorMapRef = useRef(new Map());
    const figureMapRef = titleBodyMapRef;
    const tetherMapRef = useRef(new Map());

    // F U N C T I O N

    const createBodies = () => titleElemMap.forEach((title) => {

        // Properties
        const banner = { ...bannerFrame, ...bannerPoint };
        const body = {};
        body.width = (title.width / 100) * banner.width;
        body.height = (title.height / 100) * banner.height;
        body.x = banner.x + (title.x / 100) * banner.width;
        body.y = banner.y + (title.y / 100) * banner.height;

        // Create figure
        const prevFigure = figureMapRef.current.get(title.key);
        const figure = (() => {

            // Properties
            const { width, height, x, y } = body;
            const angle = prevFigure?.angle || title.angle * (Math.PI / 180);
            const color = prevFigure?.color || 'var(--color-gray4)';
            const group = title.group || 0x1;
            const velocity = prevFigure?.velocity || { x: 0, y: 0 };

            // Create figure
            return Bodies.rectangle(
                x, y, width, height, {
                // Geometry
                color: color,
                key: title.key,
                label: 'title',
                width: width,
                height: height,
                // Physics
                angle: angle,
                inertia: Infinity,
                velocity: velocity,
                // Settings
                isStatic: false,
                collisionFilter: {
                    category: group,
                    mask: 0x1 | 0x10
                },
                render: {
                    visible: false
                },
            });

        })();

        // Create anchors
        const [anchorLeft, anchorRight] = [1, 0].map((left) => {
            // Properties
            const radius = 5;
            const x = body.x + body.width * (left ? -0.3 : 0.3);
            const y = body.y;
            // Create
            return Bodies.circle(
                x, y, radius, {
                // Settings
                isSensor: true,
                isStatic: true,
                render: {
                    visible: false
                }
            });
        });

        // Create tethers
        const [tetherLeft, tetherRight] = [1, 0].map((left) => {
            // Properties
            const width = body.width * 0.05;
            // Create
            return Constraint.create({
                bodyA: left ? anchorLeft : anchorRight,
                bodyB: figure,
                length: width,
                stiffness: client.onDesktop ? 0.02 : 0.05,
                render: {
                    visible: false
                }
            });
        });

        // Remove bodies
        // ... Remove from matter
        const figures = figureMapRef.current.get(title.key) || [];
        const anchors = anchorMapRef.current.get(title.key) || [];
        const tethers = tetherMapRef.current.get(title.key) || [];
        Composite.remove(engine.world, [anchors, figures, tethers].flat());
        // ... Remove from Map
        figureMapRef.current.delete(title.key);
        anchorMapRef.current.delete(title.key);
        tetherMapRef.current.delete(title.key);

        // Employ bodies
        const bodies = [figure, anchorLeft, anchorRight, tetherLeft, tetherRight];
        World.add(engine.world, bodies);
        figureMapRef.current.set(title.key, figure);
        anchorMapRef.current.set(title.key, [anchorLeft, anchorRight]);
        tetherMapRef.current.set(title.key, [tetherLeft, tetherRight]);

    });

    // E F F E C T

    useEffect(() => {
        if (bannerFrame.width === 0 || bannerPoint === 0) return;
        if (titleElemMap.size === 0) return;
        createBodies();
    }, [bannerFrame, bannerPoint, titleElemMap]);

}