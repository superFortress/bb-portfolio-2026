// I M P O R T

// Modules
import { useEffect, useRef, useState } from 'react';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// E X P O R T

export default function Tiles({

    array = [],
    aspectRatio = 16 / 9,
    color = 'transparent',
    minWidth = 0,
    rounded = false

}) {

    // A S S I G N

    // References
    const listRef = useRef(null);

    // States
    const [parentWidth, setParentWidth] = useState(0);

    // Stores
    const client = useClientStore();
    const isDesktop = client.device !== 'mobile';

    // C O N F I G

    const desktopMinWidth = 240;
    const mobileMinWidth = 180;

    // D E F I N E

    const itemWidth = minWidth || (isDesktop ? desktopMinWidth : mobileMinWidth);
    const columnCount = Math.floor(parentWidth / itemWidth);
    const rowCount = Math.floor(array.length / columnCount);
    const itemCount = columnCount * rowCount;
    const itemArray = array.slice(0, itemCount);

    // E F F E C T

    // Update parent width
    useEffect(() => {
        const elem = listRef.current;
        const parentElem = elem.parentNode;
        setParentWidth(parentElem.offsetWidth);
    }, [client, listRef]);

    // R E T U R N

    return <ul ref={listRef} className="tiles" style={{
        borderRadius: rounded ? isDesktop ? 3 : 2 : undefined,

        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        overflow: 'hidden'
    }}>
        {itemArray.map((item, index) => (
            <li key={index} style={{
                aspectRatio,
                backgroundColor: color,
                minWidth: 0,

                overflow: 'hidden'
            }}>
                <img
                    loading="lazy"
                    src={item.src}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </li>
        ))}
    </ul>;

}