// I M P O R T

// Components
import PortfolioItem from './Item';

// Resources
import workArray from '#resources/workArray.jsx';

// Styles
import '#styles/components/pages/Portfolio.css';
import '#styles/components/pages/PortfolioItem.css';

// Modules
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

// Utils
import useClient from '#utils/hook/useClient.js';

// M O T I O N

const start = () => ({
    opacity: 0,
    x: 80,
});

const enter = (index) => ({
    opacity: 1,
    x: 0,
    transition: {
        delay: 0.4 * (1 - Math.pow(0.7, index)),
        type: 'spring',
        stiffness: 450,
        damping: 27
    }
});

const leave = (index) => ({
    opacity: 0,
    x: -240,
    transition: {
        delay: 0.4 * (1 - Math.pow(0.7, index)),
        duration: 0.2,
        ease: 'easeIn'
    }
});

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // States
    const client = useClient();
    const [itemArray, setItemArray] = useState(workArray);
    const [itemIndex, setItemIndex] = useState(-1);
    const [itemLabel, setItemLabel] = useState('All');

    // F U N C T I O N

    const setLabel = (label) => {
        if (client.onMobile) return;
        if (label === itemLabel) return;
        setItemLabel(label);
        setItemArray([]);
    };

    // R E T U R N

    return <div className="portfolio">
        <ul>
            <AnimatePresence
                onExitComplete={() => setItemArray(
                    itemLabel === 'All'
                        ? workArray
                        : workArray.filter((work) =>
                            work.roles.some((role) => role.alias === itemLabel)
                        )
                )}
            >
                {itemArray.map((item, index) => (
                    <motion.li
                        key={item.id}
                        onMouseEnter={() => setItemIndex(index)}
                        onMouseLeave={() => setItemIndex(-1)}
                        // Motion
                        initial={client.onDesktop ? start() : {}}
                        animate={client.onDesktop ? enter(index) : {}}
                        exit={client.onDesktop ? leave(index) : {}}
                    >
                        <PortfolioItem
                            {...item}
                            focus={index === itemIndex}
                            ratio={client.onDesktop ? item.ratio : 'auto'}
                            setLabel={setLabel}
                        />
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    </div>;

}