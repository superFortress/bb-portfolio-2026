// I M P O R T

// Components
import Desktop from './Desktop';
import Mobile from './Mobile';

// Styles
import '#styles/components/widgets/Video.css';

// Utils
import useClient from '#utils/hook/useClient.js';

// E X P O R T

export default function Video(props) {

    // A S S I G N

    // State
    const client = useClient();

    // R E T U R N

    if (client.onDesktop) return <Desktop {...props} />;
    if (client.onMobile) return <Mobile {...props} />;

}