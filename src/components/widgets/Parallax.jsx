// I M P O R T

// Modules
import { createRef, useMemo, useRef } from 'react';

// Utils
import useListener from '#utils/hook/useListener.js';

// E X P O R T

export default function Parallax({

    children = [],

    // Arguments
    aspectRatio = undefined,
    color = undefined,
    height = undefined

}) {

    // A S S I G N

    // References
    const parentRef = useRef(null);

    // D E F I N E

    // Apply attributes to each image
    const childArray = [children].flat();
    const itemArray = useMemo(() => {
        if (!childArray.flat()?.length) return [];
        return childArray
            .map((child) => child.props)
            .filter((child) => child.src)
            .map((child) => ({
                ref: createRef(),
                scale: 1,
                x: 0,
                xOffset: 0,
                y: 0,
                yOffset: 0,
                ...child
            }));
    }, [children]);

    // E F F E C T

    // Calculate image coordinates
    useListener(window, 'scroll', () => {
        // Get figure coordinates
        const parentNode = parentRef.current;
        const parentHeight = parentNode.offsetHeight;
        const figureY = parentNode.getBoundingClientRect().y;
        // Get window coordinates
        const windowHeight = window.innerHeight;
        // Get offset
        const center = figureY - (windowHeight - parentHeight) / 2;
        const offset = center / ((windowHeight + parentHeight) / 2);
        // Apply offset
        itemArray?.forEach((entry) => {
            const imageNode = entry.ref?.current;
            if (!imageNode) return;
            const x = entry.xOffset + entry.x * offset + 50;
            const y = entry.yOffset + entry.y * offset + 50;
            imageNode.style.top = y + '%';
            imageNode.style.left = x + '%';
        });
    });

    // R E T U R N

    return <figure className="parallax" ref={parentRef} style={{
        aspectRatio: aspectRatio,
        background: color,
        width: '100%',
        height: height,

        position: 'relative'
    }}>
        {itemArray.map((item, index) => (
            <div key={index} style={{
                width: '100%',
                height: '100%',

                position: 'absolute',
                zIndex: index,

                overflow: 'hidden'
            }}>
                <img
                    loading="lazy"
                    ref={item.ref}
                    src={item.src}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `
                            translate(-50%, -50%)
                            scale(${item.scale})
                        `
                    }}
                />
            </div>
        ))}
    </figure>;

}