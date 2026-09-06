// I M P O R T

// Modules
import { useEffect, useRef, useState } from 'react';

// Utilities
import mosaicGrid from '#utils/generate/mosaicGrid.js';
import useClient from '#utils/hook/useClient.js';

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // Reference
    const gridRef = useRef(null);

    // States
    const client = useClient();
    const [cellCount, setCellCount] = useState(99);
    const [columnCount, setColumnCount] = useState(6);
    const [rowCount, setRowCount] = useState(0);
    const [gridHeight, setGridHeight] = useState(0);

    // Variables
    const cellArray = [...Array(cellCount).keys()];

    // C O N F I G

    const cellIdealRatio = 4 / 3;
    const cellIdealWidth = client.onDesktop ? 240 : 120;
    const cellMultiplier = 2.5;
    const gap = client.onDesktop ? 10 : 5;

    // E F F E C T

    // Change grid size based on viewport
    useEffect(() => {

        // Calculate available space
        const gridElem = gridRef.current;
        const gridWidth = gridElem?.offsetWidth;
        const gridHeight = client.viewport.height - gridElem?.offsetTop - gap;
        if (!gridWidth || !gridHeight) return;

        // Calculate columns
        const columnCount = Math.floor(gridWidth / cellIdealWidth);
        const columnGapWidth = gap * (columnCount - 1);
        const cellWidth = Math.round((gridWidth - columnGapWidth) / columnCount);

        // Calculate rows
        const cellIdealHeight = cellWidth / cellIdealRatio;
        const minRowCount = Math.floor(gridHeight / cellIdealHeight);
        const rowGapWidth = gap * (minRowCount - 1);
        const cellHeight = Math.round((gridHeight - rowGapWidth) / minRowCount);

        // Calculate cells

    }, [client]);

    // R E T U R N

    return <div id="portfolio">
        <ul ref={gridRef} style={{
            background: '#f8bfde',
            minHeight: `calc(100vh - ${gridRef?.current?.offsetTop}px - ${gap}px`,

            margin: '60px 0 0 0',

            display: 'grid',
            gap: gap,
            gridTemplateColumns: `repeat(${columnCount}, 1fr)`
        }}>
            {cellArray.map((_, index) => (
                <li key={index} style={{
                    aspectRatio: 4 / 3,
                    background: '#3b4bff'
                }} />
            ))}
        </ul>
    </div>;

}