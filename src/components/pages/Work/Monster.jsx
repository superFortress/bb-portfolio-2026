// I M P O R T

// Assets
import LogoFeedTheHorse from '#assets/vector/logos/feed-the-horse.svg';
import LogoImagine from '#assets/vector/logos/imagine.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';
import Video from '#components/widgets/Video';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Utils
import useStyle from '#utils/hook/useStyle.js';

// S T Y L E D

const StyledProject = styled(Project)`

    h2 {
        color: #803cff;
    }

    /* header */

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #8aeb00;
    }

    #project-header::after,
    #project-header::before {
        content: '';

        position: absolute;
        inset: 0;
    }

    #project-header::after {
        background: #7061bb;

        z-index: -2;
    }

    #project-header::before {
        background: url('/assets/images/work/monster/tile-eyes.png');
        background-size: 50vh;
        opacity: 0.08;

        z-index: -1;
    }

    /* result */

    #project-result figure:first-child img {
        filter: saturate(0);
    }

`;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // E F F E C T

    useStyle(`
        --page-background: #e5f6de;

        --text-color: #1d163e;
    `);

    // R E T U R N

    return <StyledProject className="project">

        <Project.Header id="project-header">
            <h1>Monsterpop</h1>
            <figure>
                <Video
                    poster="/assets/images/work/monster/video05.jpg"
                    src="/assets/videos/work/monster/final.mp4"
                />
            </figure>
            <p>The Imagine Fantastic Film Festival is an annual, Dutch event where audiences are treated to the newest horror, fantasy, and science-fiction films from across the world. In 2013 we entered into a competition for that year's official leader.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Imagine Film Festival 2013 Leader</dd>
                <dt>Commissioned by</dt>
                <dd><LogoImagine /></dd>
                <dt>Produced by</dt>
                <dd><LogoFeedTheHorse /></dd>
                <dt>My contribution</dt>
                <dd><b>Production, Animation & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Animation</b> Danne Bakker, Niels Dekker & Natali Voorthuis<br />
                    <b>Concept design</b> Danne Bakker & Niels Dekker<br />
                    <b>Music</b> Danne Bakker & Natali Voorthuis<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles aspectRatio={isDesktop ? 7 / 3 : 16 / 9}>
                <img src="/assets/images/work/monster/banner01.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/monster/story01.jpg" />
                <img src="/assets/images/work/monster/story02.jpg" />
                <img src="/assets/images/work/monster/story03.jpg" />
                <img src="/assets/images/work/monster/story06.jpg" />
                <img src="/assets/images/work/monster/story08.jpg" />
                <img src="/assets/images/work/monster/story10.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/monster/concept01.jpg" />
                <img src="/assets/images/work/monster/video01.jpg" desktop />
                <img src="/assets/images/work/monster/video08.jpg" />
                <img src="/assets/images/work/monster/concept02.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-result">
            <Image
                src="/assets/images/work/monster/photo01.jpg"
                caption={<>Niels (left), Natali (right), and me showing off our hefty Time Capsule Award.</>}
            />
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/monster/horse01.png" />
        </Project.Section>

    </StyledProject>;

}