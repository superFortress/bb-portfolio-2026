// I M P O R T

// Assets
import IconArrowRight from '#assets/vector/ui/arrow-right.svg';

// Components
import Matter from './Matter';
import Button from '#components/widgets/Button.jsx';

// Modules
import { useRef, useState } from 'react';

// Styles
import '#styles/components/pages/Home.css';

// Utils
import useClient from '#utils/hook/useClient.js';
import useLayoutObserver from '#utils/hook/useLayoutObserver.js';

// E X P O R T

export default function Home() {

    // A S S I G N

    // Reference
    const bannerRef = useRef(null);
    const parentRef = useRef(null);

    // State
    const [bannerFrame, setBannerFrame] = useState({ width: 0, height: 0 });
    const [bannerPoint, setBannerPoint] = useState({ x: 0, y: 0 });
    const [canvasFrame, setCanvasFrame] = useState({ width: 0, height: 0 });

    // E F F E C T

    // Observe banner
    useLayoutObserver(bannerRef, (_, banner) => {
        const { width } = banner;
        const height = width * (48 / 80);
        const x = banner.x - banner.width / 2;
        const y = banner.y - banner.height / 2;
        setBannerFrame({ width, height });
        setBannerPoint({ x, y });
    }, 50);

    // Observe canvas
    useLayoutObserver(parentRef, (_, parent) => {
        const { width, height } = parent;
        setCanvasFrame({ width, height });
    }, 50);

    // Observe viewport
    const client = useClient(null, 50);

    // R E T U R N

    return <div className="home" ref={parentRef}>

        {/* Banner */}

        <div className="home__banner" ref={bannerRef}>
            <figure className="home__banner-head" style={{
                position: 'relative'
            }}>
                <img
                    alt="home screen titles"
                    src="assets/images/home/titles.png"
                />
            </figure>
            <span className="home__banner-info">
                {client.onDesktop && <>
                    Hi, my name is Boriz. I'm a <span>creative director</span> who lives and works near Amsterdam. Nice to meet you!
                </>}
                {client.onMobile && <>
                    I'm Boriz, a <span>creative director</span> from Amsterdam. Nice to meet you!
                </>}
            </span>
            <ul className="home__banner-menu">
                <li>
                    <Button
                        to="/work"
                        fillColor="var(--color-lemon)"
                    >
                        <span>View my portfolio</span>
                        <IconArrowRight />
                    </Button>
                </li>
            </ul>
        </div>

        {/* Matter */}

        <Matter
            bannerFrame={bannerFrame}
            bannerPoint={bannerPoint}
            canvasFrame={canvasFrame}
            client={client}
        />

    </div>;

}