// I M P O R T

// Assets
import { ui } from '#assets/vector/index.jsx';

// Modules
import { useState } from 'react';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Credits.css';

// E X P O R T

export default function Credits({
    
    children = [],

    // Arguments
    color = undefined

}) {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // States
    const [expand, setExpand] = useState(isDesktop);

    // D E F I N E

    // Combine head and body elements
    const childArray = [children].flat();
    const itemArray = [];
    const itemCount = Math.ceil(childArray.length / 2);
    for (let index = 0; index < itemCount; index++) {
        const Head = childArray[index * 2];
        const Body = childArray[index * 2 + 1];
        itemArray.push([Head, Body]);
    }

    // R E T U R N

    return <div className="credits">

        {/* Toggle */}

        {isMobile && <button
            onClick={() => setExpand((expand) => !expand)}
        >
            <span>Show credits</span>
            {expand ? <ui.tinyArrowUp /> : <ui.tinyArrowDown />}
        </button>}

        {/* Column */}

        {expand && <dl className="credits__list" style={{ color }}>
            {itemArray.map(([Head, Body], index) => (
                <div key={index} className="credits__list-item">
                    {Head}
                    {Body}
                </div>
            ))}
        </dl>}

    </div>;

}