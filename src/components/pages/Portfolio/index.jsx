// I M P O R T

// Components
import PortfolioItem from './Item';

// Resources
import workArray from '#resources/workArray.jsx';

// Styles
import '#styles/components/pages/Portfolio.css';
import '#styles/components/pages/PortfolioItem.css';

// Modules
import { useEffect, useState } from 'react';

// Utils
import useClient from '#utils/hook/useClient.js';

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // States
    const client = useClient();
    const [itemArray, setItemArray] = useState([]);
    const [itemLabel, setItemLabel] = useState('All');

    // E F F E C T

    // Select projects by current label
    useEffect(() => {
        if (itemLabel === 'All') setItemArray(workArray);
        else setItemArray(() => (
            workArray.filter((work) => {
                const labelArray = work.roles.map((role) => role.alias);
                return labelArray.includes(itemLabel);
            })
        ));
    }, [itemLabel, workArray]);

    // R E T U R N

    return <div className="portfolio">
        <ul>
            {itemArray.map((item) => (
                <PortfolioItem
                    {...item}
                    key={`${itemLabel}-${item.id}`}
                    ratio={client.onDesktop ? item.ratio : 'auto'}
                    route={`/work/${item.id}`}
                    setItemLabel={setItemLabel}
                />
            ))}
        </ul>
    </div>;

}