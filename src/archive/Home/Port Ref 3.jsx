// I M P O R T

// Elements
import Grid from '../elements/Grid';

// Utilities
import useClient from '#utils/hook/useClient';

// E X P O R T

export default function Portfolio() {

    // A S S I G N

    // State
    const client = useClient();

    // R E T U R N

    return <div id="portfolio">
        <Grid
            cellCount={99}
            cellWidth={client.onDesktop ? 240 : 120}
            cellHeight={client.onDesktop ? 180 : 90}
            style={{
                minHeight: 240
            }}
        />
    </div>;

}