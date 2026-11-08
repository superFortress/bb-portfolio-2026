// I M P O R T

// Assets
import LogoASNBank from '#assets/vector/logos/asn-bank.svg';
import LogoSelmore from '#assets/vector/logos/selmore.svg';

// Components
import Carousel from '#components/widgets/Carousel.jsx';
import Credits from '#components/widgets/Credits.jsx';
import Gallery from '#components/widgets/Gallery.jsx';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles.jsx';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Utils
import useStyle from '#utils/hook/useStyle';

// S T Y L E D

const StyledProject = styled(Project)`

    --color-tint1: #f0f4cd;
    --color-tint2: #f6fbf2;
    --color-tint3: #bbcbaa;
    --color-tint4: #edebdf;
    --color-tint5: #d7ead6;
    --color-tint6: #f4fbf1;
    --color-tint7: #d6d8c9;

    /* header */

    #project-header :is(b, h1),
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #df3c34;
    }

    #project-header-vera {
        position: relative;
    }

    #project-header-vera::after {
        content: '👑';

        position: absolute;
        top: -9px;
        right: -8px;
        transform: rotate(23deg) scale(0.85);
    }

    #project-storyboard02 .project__column {
        width: var(--app-width-large);
    }

    /* production */

    #project-production {
        background: #fcc847;
    }
    
    #project-production figure {
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
    }

    /* story */

    #project-story-01 li:nth-child(7n + 1) { background: var(--color-tint1); }
    #project-story-01 li:nth-child(7n + 2) { background: var(--color-tint2); }
    #project-story-01 li:nth-child(7n + 3) { background: var(--color-tint3); }
    #project-story-01 li:nth-child(7n + 4) { background: var(--color-tint4); }
    #project-story-01 li:nth-child(7n + 5) { background: var(--color-tint5); }
    #project-story-01 li:nth-child(7n + 6) { background: var(--color-tint6); }
    #project-story-01 li:nth-child(7n + 7) { background: var(--color-tint7); }

    #project-story-01 li img {
        mix-blend-mode: multiply;
    }

    #project-story-02 {
        background: var(--color-tint4);
    }

    #project-story-02 li img {
        mix-blend-mode: multiply;
    }

`;

// E X P O R T

export default function Rinkel() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // E F F E C T

    useStyle(`
        --page-background: #f0f4cd;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>De Geniale Rinkel</h1>
            <figure>
                <Carousel>
                    <video poster="/assets/images/work/rinkel/ep01/video05.jpg"
                        src="/assets/videos/work/rinkel/ep01.mp4" />
                    <video poster="/assets/images/work/rinkel/ep02/video04.jpg"
                        src="/assets/videos/work/rinkel/ep02.mp4" />
                    <video poster="/assets/images/work/rinkel/ep03/video02.jpg"
                        src="/assets/videos/work/rinkel/ep03.mp4" />
                    <video poster="/assets/images/work/rinkel/ep04/video12.jpg"
                        src="/assets/videos/work/rinkel/ep04.mp4" />
                    <video poster="/assets/images/work/rinkel/ep05/video11.jpg"
                        src="/assets/videos/work/rinkel/ep05.mp4" />
                    <video poster="/assets/images/work/rinkel/ep06/video06.jpg"
                        src="/assets/videos/work/rinkel/ep06.mp4" />
                </Carousel>
            </figure>
            <p><b>Hallo allemaal!</b> To help ASN Bank reach a younger audience we created this five part series about the young and clever <b>Rinkel</b>. Through his adventures we teach kids how to take better care of both the environment and their pocket money.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Rinkel: De Duurzame Uitvinder</dd>
                <dt>Commissioned by</dt>
                <dd><LogoASNBank /></dd>
                <dt>Produced by</dt>
                <dd><LogoSelmore /></dd>
                <dt>My contribution</dt>
                <dd><b>Creative lead, Animation & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Script</b> Lotte Ooms<br />
                    <b>Background art</b> Vera de <span id="project-header-vera">Koning</span><br />
                    <b>Voice acting</b> Lae Schäfer, Rosalie Lub, Erica Baatsen
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/rinkel/ep03/video02.jpg" />
                <img src="/assets/images/work/rinkel/ep05/video05.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/video05.jpg" />
                <img src="/assets/images/work/rinkel/ep04/concept03.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <Image src="/assets/images/work/rinkel/element01.png" />
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={2}>
                <img src="/assets/images/work/rinkel/sketch01.jpg" />
                <img src="/assets/images/work/rinkel/sketch06.png" />
                <img src="/assets/images/work/rinkel/sketch04.png" />
                <img src="/assets/images/work/rinkel/sketch03.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Aside id="project-story-01">
            <Tiles columns={device === 'desktop' ? 5 : device === 'tablet' ? 3 : 2}>
                <img src="/assets/images/work/rinkel/ep04/story01.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story02.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story03.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story04a.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story05a.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story06.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story07.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story10a.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story11.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story12b.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story13.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story14a.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story15.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story16a.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story17b.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story22.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story25.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story28.jpg" />
                <img src="/assets/images/work/rinkel/ep04/story30.jpg" desktop />
                <img src="/assets/images/work/rinkel/ep04/story31.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-story-02">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 3 : 2}>
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story04.jpg"
                />
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story07.jpg"
                />
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story08.jpg"
                />
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story09.jpg"
                />
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story10.jpg"
                />
                <img
                    caption={``}
                    src="/assets/images/work/rinkel/ep05/story12.jpg"
                />
            </Gallery>
        </Project.Section>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/rinkel/ep04/video08.jpg" />
                <img src="/assets/images/work/rinkel/ep01/video10.jpg" />
                <img src="/assets/images/work/rinkel/ep04/video04.jpg" />
                <img src="/assets/images/work/rinkel/ep04/video03.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/rinkel/ep06/video09.jpg" />
        </Project.Section>

    </StyledProject>;

}