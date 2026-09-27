// I M P O R T

// Components
import PortfolioItem from './Item';

// Modules
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Resources
import work from '#resources/workStore.jsx';

// Styles
import '#styles/components/pages/Portfolio.css';
import '#styles/components/pages/PortfolioItem.css';

// Utils
import clamp from '#utils/clamp/clamp.js';
import useClient from '#utils/hook/useClient.js';
import useListener from '#utils/hook/useListener.js';

// S T A T I C

const workArray = ['rinkel', 'escience', 'guardian', 'eread', 'agrico', 'talkthick', 'pink', 'vocol', 'opa', 'noord', 'nova', 'jip', 'monster', 'pool', 'cloud', 'creamy', 'rabo', 'hoofd', 'traffic', 'year']
    .flatMap((id) => !work[id] ? [] : { id, ...work[id] });

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // States
    const client = useClient();
    const [focusIndex, setFocusIndex] = useState(-1);

    // E F F E C T

    // Highlight item relative to scroll
    useListener(window, 'scroll', () => {
        if (client.onDesktop) return;
        // Get page measurements
        const pageHeight = document.documentElement.scrollHeight;
        const portHeight = window.innerHeight;
        const scrollY = window.scrollY;
        // Set buffers
        const bufferTop = 1;
        const bufferBottom = 0;
        // Set scroll amount from 0 to 100
        const scrollFactor = clamp(
            (scrollY - bufferTop) /
            ((pageHeight - bufferBottom) - (portHeight - bufferBottom))
        , 0, 1);
        // Select index based on scroll
        const focusIndex = Math.ceil(workArray.length * scrollFactor) - 1;
        setFocusIndex(focusIndex);
    });

    // R E T U R N

    return <div className="portfolio">
        <ul>
            {workArray.map((item, index) => {
                const focus = focusIndex === index || undefined;
                const ratio = client.onDesktop ? item.ratio : 'auto';
                return <li key={item.id}>
                    <Link
                        onMouseEnter={() => setFocusIndex(index)}
                        onMouseLeave={() => setFocusIndex(-1)}
                    >
                        <PortfolioItem
                            {...item}
                            focus={focus}
                            ratio={ratio}
                        />
                    </Link>
                </li>
            })}
        </ul>
    </div>;

}