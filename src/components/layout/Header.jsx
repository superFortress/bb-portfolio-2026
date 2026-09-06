// I M P O R T

// Assets
import IconHome from '#assets/vector/icon/home.svg';
import IconPlane from '#assets/vector/icon/plane.svg';

// Components
import Button from '#components/widgets/Button';

// Modules
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Styles
import '#styles/components/layout/Header.css';

// Utils
import capitalize from '#utils/string/capitalize.js';
import pathToArray from '#utils/filesystem/pathToArray.js';
import useClient from '#utils/hook/useClient.js';

// E X P O R T

export default function Header() {

    // A S S I G N

    // States
    const [pathArray, setPathArray] = useState([]);

    // Variables
    const client = useClient();
    const location = useLocation();

    // E F F E C T

    // Update path Array on location change
    useEffect(() => {
        let currentPath = '';
        const splitPath = pathToArray(location.pathname);
        const pathArray = splitPath.map((path) => {
            let alias = capitalize(path);
            if (alias === 'Work') alias = 'Portfolio';
            let route = currentPath += `/${path}`;
            return { alias, route };
        });
        setPathArray(pathArray);
    }, [location]);

    // R E T U R N

    return <header className="app-header">
        <nav>

            {/* Path */}

            {client.onDesktop && <ul className="app-header__path">
                <AnimatePresence>
                    {pathArray.map((path) => (
                        <motion.li
                            key={path.alias}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link to={path.route}>
                                <span>
                                    {path.alias}
                                </span>
                            </Link>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>}

            {/* Menu */}

            <ul className="app-header__menu">
                {client.onDesktop && <li>
                    <Button to="/">
                        <IconHome />
                        <span>Home</span>
                    </Button>
                </li>}
                <li>
                    <Button to="#contact">
                        <IconPlane />
                        <span>Contact</span>
                    </Button>
                </li>
            </ul>

        </nav>
    </header>;

}