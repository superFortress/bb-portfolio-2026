// I M P O R T

// Assets
import LogoBooreiland from '#assets/vector/logos/booreiland.svg';
import LogoIn60seconds from '#assets/vector/logos/in60seconds.svg';

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

    /* header */

    #project-header {
        background: #ffa8c7;
    }

    /* briefing */

    #project-briefing {
        background: #f8f1c3;
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
        --page-background: #ffdfe2;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>CloudTeams</h1>
            <figure>
                <Video
                    poster="/assets/images/work/cloud/video13.jpg"
                    src="/assets/videos/work/cloud/final.mp4"
                />
            </figure>
            <p>CloudTeams is an online platform that connects app developers to their potential customers. In this video, we put a face to both the product and its varied customer base.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>CloudTeams</dd>
                <dt>Commissioned by</dt>
                <dd><LogoBooreiland /></dd>
                <dt>Produced by</dt>
                <dd><LogoIn60seconds /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Graphic design & Storyboarding</b></dd>
                <dt>This production was made during my work relationship at in60seconds.</dt>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-sketch">
            <Tiles minWidth={240}>
                <img src="/assets/images/work/cloud/concept04.jpg" />
                <img src="/assets/images/work/cloud/concept06.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p className="project__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/cloud/loop-kate02.gif" desktop />
                <img src="/assets/images/work/cloud/loop-mike03.gif" />
                <img src="/assets/images/work/cloud/loop-kate03.gif" />
            </Gallery>
        </Project.Section>

        <Project.Aside id="project-result">
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/cloud/video10.jpg" />
                <img src="/assets/images/work/cloud/concept03.jpg" />
                <img src="/assets/images/work/cloud/video04.jpg" desktop />
                <img src="/assets/images/work/cloud/video12.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header title</h2>
            <hr />
            <h3>Result</h3>
            <p className="project__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/cloud/element02.png" />
        </Project.Section>

    </StyledProject>;

}