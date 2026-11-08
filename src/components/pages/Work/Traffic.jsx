// I M P O R T

// Assets
import LogoTalkThick from '#assets/vector/logos/talkthick.svg';
import LogoTavaana from '#assets/vector/logos/tavaana.svg';

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

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header {
        background: linear-gradient(
            180deg,
            var(--color-gray1) 50%,
            #fff
        );
    }

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #c63137;
    }

    /* briefing */

    #project-briefing {
        background: #dadbcd;
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
            <h1>Traffic</h1>
            <figure>
                <Video
                    poster="/assets/images/work/traffic/video05.jpg"
                    src="/assets/videos/work/traffic/final.mp4"
                />
            </figure>
            <p>We experience life on the streets of Tehran through the eyes of eight-year-old Mahsa. She makes a living selling charms amidst the traffic that overflows Iran's capital.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Traffic in Tehran</dd>
                <dt>Commissioned by</dt>
                <dd><LogoTavaana /></dd>
                <dt>Produced by</dt>
                <dd><LogoTalkThick /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation, Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Mostafa Heravi<br />
                    <b>Music</b> Kai Engel<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside>
            <Image src="/assets/images/work/traffic/video11.jpg" />
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery columns={isDesktop ? 4 : 3}>
                <img src="/assets/images/work/traffic/story01.jpg" />
                <img src="/assets/images/work/traffic/story03.jpg" />
                <img src="/assets/images/work/traffic/story06.jpg" />
                <img src="/assets/images/work/traffic/story07.jpg" />
                <img src="/assets/images/work/traffic/story05.jpg" />
                <img src="/assets/images/work/traffic/story10.jpg" />
                <img src="/assets/images/work/traffic/story11.jpg" />
                <img src="/assets/images/work/traffic/story12.jpg" />
                <img src="/assets/images/work/traffic/story13.jpg" />
                <img src="/assets/images/work/traffic/story15.jpg" />
                <img src="/assets/images/work/traffic/story18.jpg" />
                <img src="/assets/images/work/traffic/story19.jpg" />
            </Gallery>
        </Project.Section>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/traffic/video03.jpg" />
                <img src="/assets/images/work/traffic/video17.jpg" />
                <img src="/assets/images/work/traffic/video16.jpg" desktop />
                <img src="/assets/images/work/traffic/video08.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/traffic/concept01.jpg" />
        </Project.Section>

    </StyledProject>;

}