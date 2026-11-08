// I M P O R T

// Assets
import LogoIn60seconds from '#assets/vector/logos/in60seconds.svg';
import LogoRabobank from '#assets/vector/logos/rabobank.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';
import Video from '#components/widgets/Video';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #0096c6;
    }

`;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Jaarverslag 2017</h1>
            <figure>
                <Video
                    poster="/assets/images/work/rabo/video06.jpg"
                    src="/assets/videos/work/rabo/final.mp4"
                />
            </figure>
            <p>As we near the end of another successful year for Rabobank, we reflect on their achievements and set our eyes on the goals and expectations for the future.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Maatschap&shy;pelijk Jaar&shy;verslag 2017</dd>
                <dt>Commissioned by</dt>
                <dd><LogoRabobank /></dd>
                <dt>Produced by</dt>
                <dd><LogoIn60seconds /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Graphic design & Storyboarding</b></dd>
                <dt>This production was made during my work relationship at in60seconds.</dt>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/rabo/video05.jpg" />
                <img src="/assets/images/work/rabo/video03.jpg" />
                <img src="/assets/images/work/rabo/video02.jpg" desktop />
                <img src="/assets/images/work/rabo/video04.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/rabo/story01.jpg" />
                <img src="/assets/images/work/rabo/story02.jpg" />
                <img src="/assets/images/work/rabo/story08.jpg" />
                <img src="/assets/images/work/rabo/story07.jpg" />
                <img src="/assets/images/work/rabo/story06.jpg" />
                <img src="/assets/images/work/rabo/story09.jpg" />
            </Gallery>
        </Project.Section>

    </StyledProject>;

}