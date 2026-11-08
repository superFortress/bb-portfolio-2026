// I M P O R T

// Components
import Credits from '#components/widgets/Credits';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';

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
        background: #f9c200;
    }

    #project-header figure {

        @media (min-width: 768px) {
            width: min(1440px, 90vw);

            margin: 80px auto 40px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }

    }

    /* briefing */

    #project-briefing {
        background: #fff;
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
        --page-background: #f9c200;    
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <Image src={
                isDesktop
                    ? '/assets/images/work/talkthick/header-desktop01.png'
                    : '/assets/images/work/talkthick/header-mobile01.png'
            } />
            <p>TalkThick is a venture into online publishing. It presents a legacy presentation of a front page with masthead, headline, and leads. All of this is balanced on top of crisp PHP with only a handful lines of optional JavaScript, optimizing the website for as wide an audience as possible while remaining fully responsive.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>TalkThick</dd>
                <dt>My contribution</dt>
                <dd><b>Graphic design & Web development</b></dd>
            </Credits>
        </Project.Header>

        <Project.Section id="project-briefing">
            <Image src="/assets/images/work/talkthick/design01.jpg" />
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside>
            <Tiles aspectRatio={3 / 4} columns={isDesktop ? 4 : 2}>
                <img src="/assets/images/work/talkthick/home02.jpg" />
                <img src="/assets/images/work/talkthick/page03.jpg" />
                <img src="/assets/images/work/talkthick/page04.jpg" />
                <img src="/assets/images/work/talkthick/home05.jpg" />
                <img src="/assets/images/work/talkthick/page05.jpg" />
                <img src="/assets/images/work/talkthick/page06.jpg" />
                <img src="/assets/images/work/talkthick/home07.jpg" />
                <img src="/assets/images/work/talkthick/home09.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/talkthick/icons01.png" />
        </Project.Section>

    </StyledProject>;

}