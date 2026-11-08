// I M P O R T

// Assets
import LogoNovaCollege from '#assets/vector/logos/nova-college.svg';
import LogoTupilakStudio from '#assets/vector/logos/tupilak-studio.svg';

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
import useStyle from '#utils/hook/useStyle';

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #135bd2;
    }

    /* stills */

    #project-stills {
        background: #e5eff2;
    }

    #project-stills img {
        mix-blend-mode: multiply;
    }

    /* story */

    #project-story-01,
    #project-story-02 {
        background: var(--color-gray1);
    }

    #project-story-02 .project__column {
        align-items: center;
    }

    #project-story-02 .project__column > .gallery {
        width: var(--app-width-large);
    }

    #project-story-02 .project__column > figure {
        mix-blend-mode: multiply;
        width: var(--app-width);
    }

    #project-story-02 .project__column > p {
        width: var(--app-width);
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
        --page-background: #cee6d1;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Onderwijs&shy;logistiek</h1>
            <figure>
                <Video
                    poster="/assets/images/work/nova/video01.jpg"
                    src="/assets/videos/work/nova/final.mp4"
                />
            </figure>
            <p>Onderwijslogistiek is a scheduling tool that helps both students and teachers maintain their daily routines. To ease the transition into this new software, we made this introductory video.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Onderwijs&shy;logistiek</dd>
                <dt>Commissioned by</dt>
                <dd><LogoNovaCollege /></dd>
                <dt>Produced by</dt>
                <dd><LogoTupilakStudio /></dd>
                <dt>My contribution</dt>
                <dd><b>Animation & Storyboard</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Laurens Verwijs<br />
                    <b>Sound design</b> Elephant Ears<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-stills">
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/nova/video10.jpg" desktop />
                <img src="/assets/images/work/nova/video04.jpg" />
                <img src="/assets/images/work/nova/video08.jpg" />
                <img src="/assets/images/work/nova/video09.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-story-01">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside id="project-story-02">
            <Gallery columns={isDesktop ? 5 : 2}>
                <img src="/assets/images/work/nova/story16.jpg" />
                <img src="/assets/images/work/nova/story19.jpg" />
                <img src="/assets/images/work/nova/story20.jpg" />
                <img src="/assets/images/work/nova/story21.jpg" />
                <img src="/assets/images/work/nova/story23.jpg" />
                <img src="/assets/images/work/nova/story18.jpg" />
            </Gallery>
            <p><b>Concept A</b> &mdash; Quite the story.</p>
            <Gallery columns={isDesktop ? 5 : 2}>
                <img src="/assets/images/work/nova/story04.jpg" />
                <img src="/assets/images/work/nova/story02.jpg" />
                <img src="/assets/images/work/nova/story05.jpg" />
                <img src="/assets/images/work/nova/story07.jpg" />
                <img src="/assets/images/work/nova/story08.jpg" />
                <img src="/assets/images/work/nova/story11.jpg" />
                <img src="/assets/images/work/nova/story10.jpg" />
                <img src="/assets/images/work/nova/story12.jpg" />
                <img src="/assets/images/work/nova/story01.jpg" />
                <img src="/assets/images/work/nova/story14.jpg" />
            </Gallery>
            <p><b>Concept B</b> &mdash; Quite the story.</p>
            <Gallery columns={isDesktop ? 5 : 2}>
                <img src="/assets/images/work/nova/color13.jpg" />
                <img src="/assets/images/work/nova/color06.jpg" />
                <img src="/assets/images/work/nova/color05.jpg" />
                <img src="/assets/images/work/nova/color04.jpg" />
                <img src="/assets/images/work/nova/color07.jpg" />
                <img src="/assets/images/work/nova/color10.jpg" />
            </Gallery>
            <p><b>Concept C</b> &mdash; Quite the story.</p>
            <Image src="/assets/images/work/nova/element01.png" />
        </Project.Aside>

        <Project.Section>
            <Image src="/assets/images/work/nova/video02.jpg" />
            <h2>Header Title</h2>
            <hr />
            <h3>Result</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

    </StyledProject>;

}