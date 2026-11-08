// I M P O R T

// Modules
import { useEffect, useRef, useState } from 'react';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// E X P O R T

export default function Tiles({

    children = [],

    // Arguments
    aspectRatio = 16 / 9,
    color,
    columns = 0,
    minWidth = 0,
    rows = 0,

    // Attributes
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
    const isMobile = client.device === 'mobile';

    // C O N F I G

    const desktopMinWidth = 240;
    const mobileMinWidth = 180;

    // D E F I N E

    // Remove device specific entries
    const childArray = [children].flat();
    const childArrayFiltered = childArray.filter((child) => {
        if (child.props.desktop && isMobile) return false;
        if (child.props.mobile && isDesktop) return false;
        return true;
    });

    // Adjust width to entry count and minimum width
    minWidth = minWidth || (isDesktop ? desktopMinWidth : mobileMinWidth);
    const itemCount = childArrayFiltered.length;
    const itemWidth = Math.max(Math.floor(parentWidth / itemCount), minWidth);

    // Get grid measurements
    const columnCount = columns || Math.floor(parentWidth / itemWidth);
    const rowCount = rows || Math.floor(childArrayFiltered.length / columnCount);
    const itemTotal = columnCount * rowCount;

    // Fit entries inside grid
    const itemArray = childArrayFiltered
        .slice(0, itemTotal)
        .map((item) => item.props);

    // E F F E C T

    // Update parent width
    useEffect(() => {
        const elem = listRef.current;
        const parentElem = elem.parentNode;
        setParentWidth(parentElem.offsetWidth);
    }, [client, listRef]);

    // R E T U R N

    return <ul className="tiles" ref={listRef} style={{
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
                        background: item.color || undefined,
                        width: '100%',
                        height: '100%',

                        display: 'block',
                        objectFit: 'cover'
                    }}
                />
            </li>
        ))}
    </ul>;

}