// I M P O R T

// Modules
import { useEffect, useRef, useState } from 'react';

// Utils
import useClient from '../hook/useClient.js';

// E X P O R T

export default function Grid({

    cellCount: idealCellCount = 48,
    cellWidth: idealCellWidth = 240,
    cellHeight: idealCellHeight = 180,

    style = {}

}) {

    // A S S I G N

    // Reference
    const gridRef = useRef(null);

    // States
    const [cellCount, setCellCount] = useState(0);
    const [columnCount, setColumnCount] = useState(0);
    const [rowCount, setRowCount] = useState(0);

    // Variables
    const idealCellRatio = idealCellWidth / idealCellHeight;

    // E F F E C T

    useClient((client) => {

        // Calculate available space
        const gridElem = gridRef.current;
        


    });

    // R E T U R N

    return <ul className="grid" ref={gridRef} style={style}>


    </ul>;

};