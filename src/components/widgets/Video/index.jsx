// I M P O R T

// Components
import Desktop from './Desktop';
import Mobile from './Mobile';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Styles
import '#styles/components/widgets/Video.css';

// E X P O R T

export default function Video(props) {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // R E T U R N

    if (isDesktop) return <Desktop {...props} />;
    if (isMobile) return <Mobile {...props} />;

}