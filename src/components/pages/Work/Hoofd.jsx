// I M P O R T

// Assets
import LogoIn60seconds from '#assets/vector/logos/in60seconds.svg';
import LogoVORaad from '#assets/vector/logos/vo-raad.svg';

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
        background: #7cd7fc;
    }

    /* briefing */

    #project-briefing {
        background: #9ff1bf;
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
        --page-background: #e5e7d6;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Hoofdkamer</h1>
            <figure>
                <Video
                    poster="/assets/images/work/hoofd/video06.jpg"
                    src="/assets/videos/work/hoofd/final.mp4"
                />
            </figure>
            <p>We often forget that schools are not just a learning environment for the students; the members of staff often follow their own career trajectories as well. This video has a special message for those at the very top.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>VO-raad: Hoofdkamer</dd>
                <dt>Commissioned by</dt>
                <dd><LogoVORaad /></dd>
                <dt>Produced by</dt>
                <dd><LogoIn60seconds /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation</b></dd>
                <dt>This production was made during my work relationship at in60seconds.</dt>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles columns={isDesktop ? 3 : 1}>
                <img src="/assets/images/work/hoofd/video10.jpg" />
                <img src="/assets/images/work/hoofd/video11.jpg" />
                <img src="/assets/images/work/hoofd/video12.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 3 : 2}>
                <img src="/assets/images/work/hoofd/story01.jpg" />
                <img src="/assets/images/work/hoofd/story02.jpg" />
                <img src="/assets/images/work/hoofd/story05.jpg" />
                <img src="/assets/images/work/hoofd/story09.jpg" />
                <img src="/assets/images/work/hoofd/story03.jpg" />
                <img src="/assets/images/work/hoofd/story04.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Section>
            <Image src="/assets/images/work/hoofd/video09.jpg" />
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/hoofd/video03.jpg" />
                <img src="/assets/images/work/hoofd/concept03.jpg" />
                <img src="/assets/images/work/hoofd/concept01.jpg" desktop />
                <img src="/assets/images/work/hoofd/video08.jpg" />
            </Gallery>

        </Project.Section>

    </StyledProject>;

}