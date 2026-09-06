// I M P O R T

// Assets
import ImageTitles from '#assets/images/home/titles.png';
import IconArrowRight from '#assets/vector/ui/arrow-right.svg';

// Components
import Matter from './Matter';
import Button from '#components/widgets/Button.jsx';

// Styles
import '#styles/components/pages/Home.css';

// Utils
import useClient from '#utils/hook/useClient.js';

// S T A T I C

const titleStore = {
    i: { key: 'i', path: 'titles-letter-i', width: 29, height: 137 },
    m: { key: 'm', path: 'titles-letter-m', width: 142, height: 101 },
    n: { key: 'n', path: 'titles-letter-n', width: 89, height: 101 },
    o: { key: 'o', path: 'titles-letter-o', width: 97, height: 104 },
    p: { key: 'p', path: 'titles-letter-p', width: 102, height: 128 },
    r: { key: 'r', path: 'titles-letter-r', width: 59, height: 101 },
    s: { key: 's', path: 'titles-letter-s', width: 87, height: 104 },
    t: { key: 't', path: 'titles-letter-t', width: 67, height: 127 },
    u: { key: 'u', path: 'titles-letter-u', width: 89, height: 101 },
    y: { key: 'y', path: 'titles-letter-y', width: 99, height: 134 },
    period: { key: 'period', path: 'titles-period', width: 33, height: 33 }
};

const titleArray = [
    { ...titleStore.p, group: 0x2, angle: 0, x: 16.8, y: 19 },
    { ...titleStore.u, group: 0x2, angle: 0, x: 30.1, y: 22.3 },
    { ...titleStore.t, group: 0x2, angle: 0, x: 41.5, y: 19.7 },
    { ...titleStore.y, group: 0x2, angle: 18, x: 59.1, y: 16.6 },
    { ...titleStore.o, group: 0x2, angle: 18, x: 71.4, y: 19.3 },
    { ...titleStore.u, group: 0x2, angle: 18, x: 83.7, y: 26.4 },
    { ...titleStore.r, group: 0x2, angle: 18, x: 94.5, y: 31.7 },
    { ...titleStore.s, group: 0x2, angle: -12, x: 5.6, y: 65.8 },
    { ...titleStore.t, group: 0x2, angle: -12, x: 15.6, y: 59.7 },
    { ...titleStore.o, group: 0x2, angle: -12, x: 26.8, y: 58.2 },
    { ...titleStore.r, group: 0x2, angle: -12, x: 37.7, y: 54 },
    { ...titleStore.y, group: 0x2, angle: -12, x: 49.1, y: 54 },
    { ...titleStore.i, group: 0x2, angle: 0, x: 61.9, y: 49.7 },
    { ...titleStore.n, group: 0x2, angle: 0, x: 71.4, y: 53.5 },
    { ...titleStore.m, group: 0x2, angle: 0, x: 31, y: 88.8 },
    { ...titleStore.o, group: 0x2, angle: 0, x: 47.5, y: 89.1 },
    { ...titleStore.t, group: 0x2, angle: 0, x: 58.3, y: 86.7 },
    { ...titleStore.i, group: 0x2, angle: 0, x: 66.1, y: 85.1 },
    { ...titleStore.o, group: 0x2, angle: 0, x: 75.4, y: 89.1 },
    { ...titleStore.n, group: 0x2, angle: 0, x: 88.7, y: 88.9 },
    { ...titleStore.period, group: 0x2, angle: 0, x: 97.9, y: 96.5 }
];

// E X P O R T

export default function Home() {

    // A S S I G N

    // Variables
    const client = useClient();

    // R E T U R N

    return <div className="home">

        {/* Banner */}

        <div className="home__banner">
            <figure className="home__banner-head" style={{
                position: 'relative'
            }}>
                <img
                    alt="home screen titles"
                    src={ImageTitles}
                />
                <div style={{
                    width: '100%',
                    height: '100%',

                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    {titleArray.map((title, index) => {
                        const src = `./assets/images/home/${title.path}.png`;
                        const width = title.width / 8;
                        const height = title.height / 4.8;
                        return <div key={index} style={{
                            backgroundColor: '#a2d8ff',
                            maskImage: `url(${src})`,
                            maskSize: `100%`,
                            width: `${width}%`,
                            height: `${height}%`,

                            position: 'absolute',
                            top: `${title.y}%`,
                            left: `${title.x}%`,
                            transform: `
                                translate(-50%, -50%)
                                rotate(${title.angle}deg)
                            `
                        }} />;
                    })}
                </div>
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

    </div>;

}