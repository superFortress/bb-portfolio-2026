// I M P O R T

// Module
import { createRef, useState } from 'react';

// E X P O R T

export default function Shapes({

    // Element
    shapeBodyMapRef = null,

    // Geometry
    zIndex = 0,
    
    // Matter
    useUpdate = null

}) {

    // A S S I G N

    // State
    const [shapeElemMap, setShapeElemMap] = useState(new Map());

    // U P D A T E

    // Update element Map
    useUpdate(() => {
        const bodyKeys = [...shapeBodyMapRef.current?.keys() || []];
        const elemKeys = [...shapeElemMap.keys()];
        const addedKeys = bodyKeys.filter((key) => !elemKeys.includes(key));
        const removedKeys = elemKeys.filter((key) => !bodyKeys.includes(key));
        if (!addedKeys.length && !removedKeys.length) return;
        setShapeElemMap((lastMap) => {
            const nextMap = new Map(lastMap);
            removedKeys.forEach((key) => nextMap.delete(key));
            addedKeys.forEach((key) => {
                const shape = shapeBodyMapRef.current?.get(key);
                if (shape) nextMap.set(key, { ...shape, ref: createRef() });
            });
            return nextMap;
        });
    });

    // Update element properties
    useUpdate(() => shapeElemMap.keys().forEach((key) => {
        const body = shapeBodyMapRef.current?.get(key);
        const elem = shapeElemMap.get(key).ref.current;
        if (!body || !elem) return;
        const { alpha, angle, color } = body;
        const { x, y } = body.position;
        // Style design
        elem.style.color = color;
        elem.style.opacity = alpha;
        // Style position
        elem.style.top = `${body.height * -0.5}px`;
        elem.style.left = `${body.width * -0.5}px`;
        elem.style.transform = `
            translate(${x}px, ${y}px)
            rotate(${angle}turn)
            ${body.transform || ''}
        `;
    }));

    // R E T U R N

    return <div style={{
        width: '100%',
        height: '100%',

        position: 'absolute',
        zIndex: zIndex
    }}>
        {[...shapeElemMap.entries()].map(([key, shape]) => {
            return <div
                key={key}
                ref={shape.ref}
                style={{
                    opacity: 1,
                    width: shape.width,
                    height: shape.height,

                    position: 'absolute',
                    top: 100,
                    left: 100
                }}
            >
                {shape.image && <shape.image />}
            </div>;
        })}
    </div>;

}