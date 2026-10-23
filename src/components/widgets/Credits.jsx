// I M P O R T

// Assets
import { ui } from '#assets/vector/index.jsx';

// Modules
import { useEffect, useState } from 'react';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Credits.css';

// E X P O R T

export default function Credits({
    
    array = []

}) {

    // A S S I G N

    // States
    const [expand, setExpand] = useState(false);

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // E F F E C T

    // Expand credits by default on desktop
    useEffect(() => {
        if (isDesktop) setExpand(true);
    }, [isDesktop]);

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

        {expand && <dl className="credits__list">
            {array.map((item, index) => (
                <div key={index} className="credits__list-item">
                    <dt>{item.head}</dt>
                    <dd>{item.body}</dd>
                </div>
            ))}
        </dl>}

    </div>;

}