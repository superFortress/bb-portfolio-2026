// E X P O R T

export default function PortfolioItem({

    alias = <>Undefined</>,
    brand: BrandLogo = null,
    brief = <>Undefined</>,
    color = '#f33',
    focus = false,
    image = '/assets/images/utils/missing-image.png',
    ratio = 'auto',
    roles = []

}) {

    // D E F I N E

    // Order roles by importance
    const roleArray = roles.toSorted((a, b) => (
        b.order - a.order ||
        a.alias.localeCompare(b.alias)
    ));

    // R E T U R N

    return <div
        aria-current={focus || undefined}
        className="portfolio-item"
        style={{ aspectRatio: ratio }}
    >

        {/* About */}

        <div className="portfolio-item__about">
            <h1>{alias}</h1>
            <BrandLogo style={{ color }} />
            <hr />
            <p>{brief}</p>
            <ul>
                {roleArray.map((role, index) => {
                    const Icon = role.image;
                    return <li key={index}>
                        <Icon />
                        <span>{role.alias}</span>
                    </li>
                })}
            </ul>
        </div>

        {/* Image */}

        <div
            aria-current={focus || undefined}
            className="portfolio-item__image"
            style={{
                backgroundColor: color,
                backgroundImage: `url(${image})`
            }}
        />

    </div>;

}