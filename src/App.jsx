// I M P O R T

// Elements
import Footer from '#components/layout/Footer';
import Header from '#components/layout/Header';
import Logo from '#components/layout/Logo';

// Modules
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { animate, AnimatePresence, motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Resources
import routeArray from '#resources/routeArray.jsx';

// Styles
import '#styles/app/Root.css';
import '#styles/app/Rule.css';
import '#styles/app/Type.css';
import '#styles/variable/Color.css';
import '#styles/variable/Order.css';
import '#styles/variable/Scale.css';

// E X P O R T

export default function App() {

    // D E F I N E

    // Store previous pathname
    const location = useLocation();
    const prevPathname = useRef(location.pathname);
    useEffect(() => { prevPathname.current = location.pathname; }, [location]);

    // Change animation relative to route
    const getPathDepth = (pathname) => pathname.split(/[\\/]+/).filter(Boolean).length;
    const prevDepth = getPathDepth(prevPathname.current);
    const currDepth = getPathDepth(location.pathname);
    const navigationDirection = Math.sign(currDepth - prevDepth);

    // E F F E C T

    // Scroll page on route change
    useEffect(() => {
        animate(window.scrollY, 0, {
            duration: 0.25,
            ease: [0, 0.6, 0.4, 1],
            onUpdate: (value) => window.scrollTo(0, value)
        });
    }, [location.pathname]);

    // M O T I O N

    const pageVariants = {
        initial: (navigationDirection) => ({
            position: 'absolute',
            x: `${125 * navigationDirection}%`,
            zIndex: 2
        }),
        animate: {
            x: `0%`,
            zIndex: 2,
            transition: {
                delay: 0.25,
                duration: 0.5,
                ease: [0.2, 0.5, 0.5, 1]
            }
        },
        exit: (navigationDirection) => ({
            x: `${-75 * navigationDirection}%`,
            zIndex: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, 0, 0.4, 1]
            }
        })
    };

    // R E T U R N

    return <div id="app">

        {/* Layout */}

        <title>Hello, friend.</title>
        <Logo />
        <Header />

        {/* Modals */}

        {/* Pages */}

        <AnimatePresence
            custom={navigationDirection}
            mode="sync"
        >
            <motion.main
                key={location.pathname}
                custom={navigationDirection}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Routes
                    key={location.key}
                    location={location.pathname}
                >
                    {useMemo(() => routeArray.map((entry) => (
                        <Route
                            key={entry.route}
                            path={entry.route}
                            element={
                                <Suspense fallback={null}>
                                    <entry.child />
                                    {location.pathname !== '/' && <Footer />}
                                </Suspense>
                            }
                        />
                    )))}
                </Routes>
            </motion.main>
        </AnimatePresence>

    </div>;

}