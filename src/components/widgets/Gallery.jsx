// I M P O R T

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Gallery.css';

// E X P O R T

export default function Gallery({

    children = [],

    // Arguments
    color = 'transparent',
    columns = 0

}) {

    // A S S I G N

    // Stores
    const client = useClientStore();
    const isDesktop = client.device !== 'mobile';
    const isMobile = client.device === 'mobile';

    // D E F I N E

    // Remove device specific entries
    const childArray = [children].flat();
    const childArrayFiltered = childArray.filter((child) => {
        if (child.props.desktop && isMobile) return false;
        if (child.props.mobile && isDesktop) return false;
        return true;
    });

    // Adjust column count to available items
    const columnCount = (() => {
        if (columns) return columns;
        if (client.body.width > 1440)
            if (childArrayFiltered.length % 5 === 0) return 5;
        if (client.body.width > 1200)
            if (childArrayFiltered.length % 4 === 0) return 4;
        if (client.body.width > 960)
            return (childArrayFiltered.length % 3 === 0) ? 3 : 2;
        if (client.body.width < 384)
            return (childArrayFiltered.length % 2 === 0) ? 2 : 1;
        if (client.body.width < 768)
            return (childArrayFiltered.length % 3 === 0) ? 3 : 2;
        if (isDesktop)
            return Math.ceil(client.body.width / 360);
        if (isMobile)
            return Math.ceil(client.body.width / 265);
    })();

    // Get grid measurements
    const rowCount = Math.floor(childArrayFiltered.length / columnCount);
    const itemCount = columnCount * rowCount;
    const itemArray = childArrayFiltered.slice(0, itemCount);

    // E F F E C T

    return <ul className="gallery" style={{
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`
    }}>
        {itemArray.map((item, index) => (
            <li key={index}>
                <figure>
                    <img
                        loading="lazy"
                        alt={item.props.alt || undefined}
                        src={item.props.src}
                        style={{ backgroundColor: color || 'transparent' }}
                    />
                    {item.props.caption && <figcaption>
                        {item.props.caption}
                    </figcaption>}
                </figure>
            </li>
        ))}
    </ul>;

}