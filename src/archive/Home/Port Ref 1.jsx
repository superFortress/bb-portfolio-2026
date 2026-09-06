// I M P O R T

// Modules
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Utilities
import mosaicGrid from '#utils/generate/mosaicGrid.js';
import useClient from '#utils/hook/useClient.js';

// S T Y L E D

const StyledList = styled.ul`

    li {
        aspect-ratio: 4 / 3;
        background: pink;
        width: 100%;
    }

`;

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // Reference

    // States
    const client = useClient();
    const [columnCount, setColumnCount] = useState(6);
    const [rowCount, setRowCount] = useState(0);

    // Variables
    const cellCount = columnCount * rowCount;
    const cellArray = [...Array(60).keys()];

    // C O N F I G

    const cellIdealRatio = 3 / 4;
    const cellIdealWidth = client.onDesktop ? 240 : 120;
    const cellMultiplier = 2.5;

    const gap = client.onDesktop ? 10 : 5;
    const marginTop = client.onDesktop ? 80 : 60;
    const minCellWidth = client.onDesktop ? 240 : 120;

    // E F F E C T

    // Change grid size based on viewport
    useEffect(() => {

        // Calculate available space
        const viewportWidth = client.viewport.width - gap * 2;
        const viewportHeight = client.viewport.height - gap - marginTop;

        // Calculate columns
        const columnCount = Math.floor(viewportWidth / cellIdealWidth);
        const cellWidth = viewportWidth / columnCount - gap * (columnCount - 1);

        console.log({ viewportWidth })


        /*
        // Calculate columns
        const minCellWidth = client.onDesktop ? 240 : 120;
        const columnCount = Math.floor(viewportWidth / minCellWidth);
        const cellWidth = viewportWidth / columnCount;

        // Calculate rows
        const minCellHeight = cellWidth / cellAspectRatio;
        const minRowCount = Math.floor(viewportHeight / minCellHeight);
        const cellHeight = viewportHeight / minRowCount;

        // Calculate cells
        const itemCount = 12;
        const maxCellCount = itemCount * cellToItemRatio;
        const minCellCount = columnCount * minRowCount;

        /*
        // Calculate cell total
        const columnCount = Math.floor(viewportWidth / minCellWidth);
        const cellCount = Math.floor(itemTotal * 2.5 / columnCount) * columnCount; 
        */

    }, [client]);

    // R E T U R N

    return <div id="portfolio">
        <StyledList style={{
            padding: `0 ${gap}px`,

            display: 'grid',
            gap: gap,
            gridTemplateColumns: `repeat(${columnCount}, auto)`
        }}>
            {cellArray.map((_, index) => (
                <li key={index} />
            ))}
        </StyledList>
    </div>;

}