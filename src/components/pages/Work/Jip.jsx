// I M P O R T

// Assets
import LogoFJ from '#assets/vector/logos/fj.svg';
import LogoJip from '#assets/vector/logos/jip.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Video from '#components/widgets/Video';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// Utils
import useStyle from '#utils/hook/useStyle.js';

// S T Y L E D

const StyledProject = styled(Project)`

    /* element */

    #project-element {
        background: linear-gradient(
            180deg,
            transparent 36%,
            #82dca5 36%
        );
    }

    /* briefing */

    #project-briefing {
        background: #82dca5;
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
        --page-background: #e1e6df;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Jipchain</h1>
            <figure>
                <Video
                    poster="/assets/images/work/jip/video04.jpg"
                    src="/assets/videos/work/jip/final.mp4"
                />
            </figure>
            <p>Jip is a young start-up that collects, processes, and archives your administration. But how do they make this all possible? Watch the animation and find out.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Jipchain</dd>
                <dt>Commissioned by</dt>
                <dd><LogoJip /></dd>
                <dt>Produced by</dt>
                <dd><LogoFJ /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd><b>Project lead</b> Jasper Fraikin</dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-element"
            width={'var(--app-width)'}
        >
            <Image src="/assets/images/work/jip/element02.png" />
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/jip/video01.jpg" />
                <img src="/assets/images/work/jip/photo01.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Section>
            <Gallery columns={isDesktop ? 3 : 2}>
                <img src="/assets/images/work/jip/story05.jpg" />
                <img src="/assets/images/work/jip/story07.jpg" />
                <img src="/assets/images/work/jip/story06.jpg" />
                <img src="/assets/images/work/jip/story08.jpg" />
                <img src="/assets/images/work/jip/story10.jpg" />
                <img src="/assets/images/work/jip/story11.jpg" />
            </Gallery>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/jip/video03.jpg" />
        </Project.Section>

    </StyledProject>;

}