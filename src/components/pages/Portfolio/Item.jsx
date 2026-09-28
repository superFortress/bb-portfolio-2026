// I M P O R T

// Assets
import { ui } from '#assets/vector/index.jsx';

// Modules
import { useState } from 'react';
import { Link } from 'react-router-dom';

// E X P O R T

export default function PortfolioItem({

    alias = <>Undefined</>,
    brand: BrandLogo = null,
    color = '#fff',
    image = '/assets/images/misc/missing-image.png',
    ratio = 'auto',
    roles = [],
    route = '/work',

    setItemLabel = () => { }

}) {

    // A S S I G N

    // States
    const [focus, setFocus] = useState(false);

    // D E F I N E

    // Order roles by importance
    const roleArray = roles.toSorted((a, b) => (
        b.order - a.order ||
        a.alias.localeCompare(b.alias)
    ));

    // R E T U R N

    return <li
        onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)}
    >
        <div
            aria-current={focus || undefined}
            className="portfolio-item"
            style={{ aspectRatio: ratio }}
        >

            {/* Anchor */}

            <Link to={route} style={{
                width: '100%',
                height: '100%',

                position: 'absolute',
                inset: 0,
                zIndex: 1
            }} />

            {/* Brand */}

            <BrandLogo className="portfolio-item__brand" style={{
                color: color
            }} />

            {/* Image */}

            <div className="portfolio-item__image" style={{
                backgroundImage: `url(${image})`
            }} />

            {/* About */}

            <div className="portfolio-item__about">
                <ul>
                    {roleArray.map((role) => (
                        <li key={role.alias}>
                            <button onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                setItemLabel(role.alias);
                            }}>
                                <role.image />
                                <span>{role.alias}</span>
                            </button>
                        </li>
                    ))}
                </ul>
                <h1>{alias}</h1>
                <ui.arrowUpRight />
            </div>

        </div>
    </li>;

}