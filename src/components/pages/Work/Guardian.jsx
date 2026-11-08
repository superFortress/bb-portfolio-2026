// I M P O R T

// Assets
import LogoDataAI from '#assets/vector/logos/data-ai.svg';
import LogoTupilakStudio from '#assets/vector/logos/tupilak-studio.svg';

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

    #project-header {
        background: #0062de;
    }

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #ffc822;
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
            <h1>Phone Guardian</h1>
            <figure>
                <Video
                    poster="/assets/images/work/guardian/thief-desktop04.jpg"
                    src="/assets/videos/work/guardian/final.mp4"
                />
            </figure>
            <p>Phone Guardian provides a no-nonsense VPN service for those who care about their data and privacy. In this advertisement we show you how to scare off all those nasty hackers once and for all.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Phone Guardian Mobile Ads</dd>
                <dt>Commissioned by</dt>
                <dd><LogoDataAI /></dd>
                <dt>Produced by</dt>
                <dd><LogoTupilakStudio /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Laurens Verwijs<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Tiles aspectRatio={1} columns={isDesktop ? 3 : 1}>
                <img src="/assets/images/work/guardian/design01.jpg" />
                <img src="/assets/images/work/guardian/design02.jpg" />
                <img src="/assets/images/work/guardian/design03.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section
            paddingBottom={0}
        >
            <h2>Heading title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 3 : 2}>
                <img src="/assets/images/work/guardian/hacker-mobile01.jpg" />
                <img src="/assets/images/work/guardian/hacker-mobile04.jpg" />
                <img src="/assets/images/work/guardian/hacker-mobile02.jpg" />
                <img src="/assets/images/work/guardian/hacker-mobile06.jpg" />
                <img src="/assets/images/work/guardian/hacker-mobile07.jpg" />
                <img src="/assets/images/work/guardian/hacker-mobile09.jpg" />
            </Gallery>
        </Project.Section>

    </StyledProject>;

}