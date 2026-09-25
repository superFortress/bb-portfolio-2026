// I M P O R T

// Components
import CanvasCollision from './Canvas/Collision';
import CanvasContainer from './Canvas/Container';
import CanvasShapes from './Canvas/Shapes';
import CanvasTitles from './Canvas/Titles';
import RenderShapes from './Render/Shapes';
import RenderTitles from './Render/Titles';

// Module
import { createRef, useMemo, useRef } from 'react';

// Resources
import { colorArray, shapeArray, titleArray } from '#resources/home.jsx';

// Utils
import useMatter from '#utils/hook/useMatter.js';

// E X P O R T

export default function Matter({

    bannerFrame = {},
    bannerPoint = {},
    canvasFrame = {},
    client = {}

}) {

    // A S S I G N

    // Reference
    const canvasRef = useRef(null);
    const shapeBodyMapRef = useRef(new Map());
    const titleBodyMapRef = useRef(new Map());

    // State
    const { engine, useUpdate } = useMatter(canvasRef, canvasFrame);

    // D E F I N E

    // Configure title elements
    const titleElemMap = useMemo(() => (
        titleArray.reduce((map, title, index) => {
            const key = `${title.key}-${index}`;
            const ref = createRef();
            const src = `assets/images/home/${title.src}.png`;
            const width = title.width / 800 * 100;
            const height = title.height / 480 * 100;
            map.set(key, { ...title, key, ref, src, width, height });
            return map;
        }, new Map())
    ), [titleArray]);

    // R E T U R N

    return <>

        {/* Canvas */}

        <canvas ref={canvasRef} style={{
            width: '100%',
            height: '100%',

            position: 'absolute'
        }} />

        <CanvasCollision
            // Element
            colorArray={colorArray}
            // Matter
            engine={engine}
        />

        <CanvasContainer
            // Geometry
            canvasFrame={canvasFrame}
            client={client}
            // Matter
            engine={engine}
        />

        <CanvasShapes
            // Element
            colorArray={colorArray}
            imageArray={shapeArray}
            shapeBodyMapRef={shapeBodyMapRef}
            // Geometry
            canvasFrame={canvasFrame}
            client={client}
            // Matter
            engine={engine}
        />

        <CanvasTitles
            // Element
            titleBodyMapRef={titleBodyMapRef}
            titleElemMap={titleElemMap}
            // Geometry
            bannerFrame={bannerFrame}
            bannerPoint={bannerPoint}
            client={client}
            // Matter
            engine={engine}
        />

        {/* Render */}

        <RenderShapes
            // Element
            shapeBodyMapRef={shapeBodyMapRef}
            // Geometry
            zIndex={2}
            // Matter
            useUpdate={useUpdate}
        />

        <RenderTitles
            // Element
            titleBodyMapRef={titleBodyMapRef}
            titleElemMap={titleElemMap}
            // Geometry
            bannerFrame={bannerFrame}
            bannerPoint={bannerPoint}
            zIndex={1}
            // Matter
            useUpdate={useUpdate}
        />

    </>;

}