// E X P O R T

// Mosaic grid
// ==> Create mosaic grid of randomly distributed items
// ==> Save item coordinates in Array
function mosaicGrid({

    rows = 2,
    columns = 2,
    cells = rows * columns,
    items = 4

}) {

    // I. C O N D I T I O N S

    // Make sure there's space
    if (rows * columns * items === 0) return [];
    cells = Math.min(cells, rows * columns);
    items = Math.min(items, cells);

    // II. V A R I A B L E S

    // Store cell occupancy
    const usedCellArray = new Uint8Array(cells);

    // Store placed items
    const itemArray = [];

    // Store cell and item availability
    let cellCount = cells;
    let itemCount = items;

    // III. F U N C T I O N S

    // Draw unobstructed rectange from cell
    const getArea = (index) => {
        const indexArray = [];
        const xStart = index % columns;
        const yStart = Math.floor(index / columns);
        let xRange = columns - xStart;
        let yRange = rows - yStart;
        for (let dy = 0; dy < yRange; dy++) {
            for (let dx = 0; dx < xRange; dx++) {
                const x = xStart + dx;
                const y = yStart + dy;
                const index = x + y * columns;
                const isFree = !usedCellArray[index];
                if (isFree) indexArray.push(index);
                // If obstructed during width expansion
                if (!isFree && dx > 0) xRange = dx;
                // If obstructed during height expansion
                if (!isFree && dx === 0) yRange = dy;
                // If obstructed at first instance
                if (!isFree && dx + dy === 0) {
                    xRange = 0;
                    yRange = 0;
                    return;
                }
            }
        }
        return indexArray;
    };

    // Split one area into two
    const splitArea = (indexArray) => {

        // Determine direction of split
        const { width, height } = objectFromIndexArray(indexArray);
        const [splitWidth, splitHeight] =
            width > height ? [true, false] :
                height > width ? [false, true] :
                    Math.random() > 0.5 ? [true, false] : [false, true];

        // Filter out areas that are too small
        if (width < 2 && height < 2) return [indexArray, []];

        // Determine split point
        const span = splitWidth ? width : height;
        const center = span / 2;
        const range = span / 2 - 1;
        const drift = (Math.random() * 2 - 1);
        const split = Math.round(center + range * drift);

        // Determine relative split
        const xSplit = split + indexArray[0] % columns;
        const ySplit = split + Math.floor(indexArray[0] / columns);

        // Distribute cells between Arrays
        const [arrayA, arrayB] = [[], []];
        indexArray.forEach((index) => {
            const x = index % columns;
            const y = Math.floor(index / columns);
            if (splitWidth && x >= xSplit) return arrayB.push(index);
            if (splitHeight && y >= ySplit) return arrayB.push(index);
            arrayA.push(index);
        });

        return [arrayA, arrayB];

    };

    // Get unique rectangles from available cells
    const getAreaArray = () => {

        // Store overlapping areas and cells
        const areaArray = [];
        const cellArray = [];

        // Find unique areas for each free cell
        const freeCellArray = [];
        usedCellArray.forEach((cell, index) => !cell && freeCellArray.push(index));
        freeCellArray.forEach((index) => {
            const area = getArea(index, usedCellArray);
            const isUnique = area.some((index) => !cellArray.includes(index));
            if (isUnique) areaArray.push(area);
            if (isUnique) cellArray.push(...area);
        });

        // Sort areas from small to large
        const sizeArray = areaArray
            .map((array, index) => [index, array.length])
            .sort((arrayA, arrayB) => arrayA[1] - arrayB[1])
            .map((array) => array[0]);

        // Remove overlapping cells
        sizeArray.forEach((index) => {
            const area = areaArray[index];
            [...area].forEach((index) => {
                cellArray.splice(cellArray.indexOf(index), 1);
                // If cell was unique, it should no longer exist
                if (!cellArray.includes(index)) return;
                // If cell was not unique, it gets removed from area
                area.splice(area.indexOf(index), 1);
            });
        });

        return areaArray;

    };

    // Create item with variable width and height
    const getItem = (index) => {

        // If space is minimal, minimize item size
        if (cellCount === itemCount) return [index];
        if (cellCount < itemCount) return [];

        // Calculate directional favoritism
        const gridRatio = columns / rows;
        const gridSpace = cellCount / itemCount;
        const xAdvice = Math.sqrt(gridSpace * gridRatio);
        const yAdvice = Math.sqrt(gridSpace / gridRatio);

        // Randomize cell size
        const range = 1;
        const xVariance = Math.random() * (range * 2) - range;
        const yVariance = Math.random() * (range * 2) - range;
        let xSpan = Math.round(xAdvice + xVariance);
        let ySpan = Math.round(yAdvice + yVariance);

        // Constrain by area bounds
        const area = getArea(index);
        const { width: xRange, height: yRange } = objectFromIndexArray(area);
        xSpan = Math.max(Math.min(xSpan, xRange), 1);
        ySpan = Math.max(Math.min(ySpan, yRange), 1);

        // Calculate indexes from widht and height
        const indexArray = [];
        for (let dy = 0; dy < ySpan; dy++) {
            for (let dx = 0; dx < xSpan; dx++) {
                indexArray.push(index + dx + dy * columns);
            }
        }

        return indexArray;

    };

    // Get coordinates from index
    const objectFromIndex = (index) => {
        const row = Math.floor(index / columns) + 1;
        const column = index % columns + 1;
        return { row, column, width: 1, height: 1 };
    };

    // Get coordinates and dimensions index Array
    const objectFromIndexArray = (indexArray) => {
        if (!indexArray.length) return { row: 0, column: 0, width: 0, height: 0 };
        const first = objectFromIndex(indexArray[0]);
        const last = objectFromIndex(indexArray[indexArray.length - 1]);
        const width = last.column - first.column + 1;
        const height = last.row - first.row + 1;
        return { ...first, width, height };
    };

    // IV. L O G I S T I C S

    for (itemCount; itemCount > 0; itemCount) {

        // Count unique rectangles available
        const areaArray = getAreaArray();
        const areaCount = areaArray.length;

        // If enough item are available, create items procedurally
        const areaLimit = itemCount > areaCount;
        const hardLimit = itemCount > 4;
        const softLimit = itemCount > Math.floor(items * 0.4);
        if (areaLimit && hardLimit && softLimit) {

            // Find next available index
            const index = usedCellArray.findIndex((cell) => !cell);

            // Guarantee item fits
            let item = null;
            let tooManyAreas = true;
            let tooManyItems = true;
            while (tooManyAreas || tooManyItems) {

                // Create next item
                item = getItem(index);

                // Update variables
                item.forEach((index) => usedCellArray[index] = 1);
                cellCount -= item.length;
                itemCount -= 1;

                // Confirm that areas outnumber items
                const areaArray = getAreaArray();
                const areaCount = areaArray.length;
                tooManyAreas = areaCount > itemCount;

                // Confirm that items outnumber cells
                tooManyItems = itemCount > cellCount;

                // Restore variables 
                if (tooManyAreas || tooManyItems) {
                    item.forEach((index) => usedCellArray[index] = 0);
                    cellCount += item.length;
                    itemCount += 1;
                }

            }

            // Convert item to Object
            const itemObject = objectFromIndexArray(item);
            itemArray.push(itemObject);

        }

        // If few items are available, create items by division
        else {

            // If items outnumber areas, split largest areas
            while (itemCount > areaArray.length) {
                const areaIndex = areaArray
                    .map((area, index) => [index, area.length])
                    .sort((arrayA, arrayB) => arrayB[1] - arrayA[1])
                    .map((array) => array[0])[0];
                const [areaA, areaB] = splitArea(areaArray[areaIndex]);
                areaArray.splice(areaIndex, 1);
                areaArray.push(areaA, areaB);
            }

            // Sort Array depending on last cell
            areaArray.sort((arrayA, arrayB) => {
                const lastEntryA = arrayA[arrayA.length - 1];
                const lastEntryB = arrayB[arrayB.length - 1];
                return lastEntryA - lastEntryB;
            });

            // Update variables
            areaArray.forEach((item) => {
                item.forEach((index) => usedCellArray[index] = 1);
                cellCount -= item.length;
                itemCount -= 1;
            });

            // Convert item to Object
            areaArray.forEach((item) => {
                const itemObject = objectFromIndexArray(item);
                itemArray.push(itemObject);
            });

        }

    }

    // V. R E T U R N

    return itemArray;

}

export default mosaicGrid;