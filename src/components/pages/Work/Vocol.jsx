// I M P O R T

// Assets
import LogoVocol from '#assets/vector/logos/vocol.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header::after,
    #project-header::before {
        content: '';

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
    }

    #project-header::after {
        background: url(/assets/images/utility/tile-noise-light.jpg);
        background-repeat: repeat;
        background-size: 120px 120px;
        mix-blend-mode: multiply;

        z-index: 2;
    }

    #project-header::before {
        background: linear-gradient(
            135deg,
            #00c4ff,
            #0470e9);

        z-index: 1;
    }

    #project-header :is(b, dd),
    #project-header-logo svg {
        color: #f9b;
    }

    #project-header .project__column {
        position: relative;
        z-index: 3;
    }

    @media (min-width: 768px) {
        #project-header::after {
            background-position: center;
        }

        #project-header-logo {
            width: 270px;
        }
    }

    @media (max-width: 767px) {
        #project-header figure {
            width: 100vw;

            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

        #project-header-logo {
            width: 180px;
        }
    }

    /* briefing */

    #project-briefing {
        background: #d5c8f0;
    }

`;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <div id="project-header-logo">
                <LogoVocol />
            </div>
            <figure>
                <img
                    src={isDesktop
                        ? '/assets/images/work/vocol/header-desktop01.png'
                        : '/assets/images/work/vocol/header-mobile01.png'
                    }
                />
            </figure>
            <p>With <b>Vocol.app</b> you can create “captchas” on the fly. These are small text blocks that are skewed, shaken up, and otherwise deformed in order to make them illegible to spying bots and other automated agents. However, as artificial comprehension has dramatically advanced since then, captchas have been largely retired as a security measure.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Vocol</dd>
                <dt>My contribution</dt>
                <dd><b>Graphic design & Web development</b></dd>
            </Credits>
        </Project.Header>

        <Project.Section id="project-briefing">
            <Image src="/assets/images/work/vocol/design-desktop03.jpg" />
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside
            paddingTop
            width={'var(--app-width)'}
        >
            <Gallery columns={isDesktop ? 3 : 2}>
                <img src="/assets/images/work/vocol/design-mobile01.jpg" />
                <img src="/assets/images/work/vocol/design-mobile03.jpg" />
                <img src="/assets/images/work/vocol/design-mobile04.jpg" />
                <img src="/assets/images/work/vocol/design-mobile05.jpg" />
                <img src="/assets/images/work/vocol/design-mobile06.jpg" />
                <img src="/assets/images/work/vocol/design-mobile09.jpg" />
            </Gallery>
        </Project.Aside>

    </StyledProject>;

}