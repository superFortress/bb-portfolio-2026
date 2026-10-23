// I M P O R T

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Gallery.css';

// E X P O R T

export default function Gallery({

    array = [],
    color = 'transparent',
    columns = 0

}) {

    // A S S I G N

    // Stores
    const client = useClientStore();
    const isDesktop = client.device !== 'mobile';
    const isMobile = client.device === 'mobile';

    // D E F I N E

    const columnCount = (() => {
        if (columns) return columns;
        if (client.body.width > 1440)
            if (array.length % 5 === 0) return 5;
        if (client.body.width > 1200)
            if (array.length % 4 === 0) return 4;
        if (client.body.width > 960)
            return (array.length % 3 === 0) ? 3 : 2;
        if (client.body.width < 384)
            return (array.length % 2 === 0) ? 2 : 1;
        if (client.body.width < 768)
            return (array.length % 3 === 0) ? 3 : 2;
        if (isDesktop)
            return Math.ceil(client.body.width / 360);
        if (isMobile)
            return Math.ceil(client.body.width / 265);
    })();

    const itemCount = Math.floor(array.length / columnCount) * columnCount;

    const itemArray = array.slice(0, itemCount);

    // E F F E C T

    return <ul className="gallery" style={{
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`
    }}>
        {itemArray.map((item, index) => (
            <li key={index}>
                <figure>
                    <img
                        alt={item.alt || undefined}
                        src={item.src}
                        style={{ backgroundColor: color || 'transparent' }}
                    />
                    {item.caption && <figcaption>
                        {item.caption}
                    </figcaption>}
                </figure>
            </li>
        ))}
    </ul>;

}