// I M P O R T

// Assets
import LogoAgrico from '#assets/vector/logos/agrico.svg';
import LogoDasLab from '#assets/vector/logos/das-lab.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Project from '#components/widgets/Project';
import Quote from '#components/widgets/Quote';
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
        background: #d1252b;
    }

    #project-header h1 {
        color: #fff;
    }

    /* briefing */

    #project-briefing {
        background: var(--color-gray1);
    }

    #project-briefing img {
        mix-blend-mode: multiply;
        filter: saturate(0);
    }

    /* story */

    #project-story {
        background: var(--color-gray1);
    }

`;

// E X P O R T

export default function Agrico() {

    // A S S I G N

    // Stores
    const device = useClientStore(state => state.device);
    const isDesktop = device !== 'mobile';
    const isMobile = device === 'mobile';

    // E F F E C T

    useStyle(`
        --app-logo-text-color: #b9b29d;
        --app-header-text-color: #b9b29d;

        --page-background: #e6e1ca;

        --text-color: #000;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header"
            paddingTop={0}
        >
            <figure>
                <img src="/assets/images/work/agrico/element01.png" />
            </figure>
            <h1>Agrico</h1>
            <p>We aided Agrico's creative team in exploring their brand and identity, aiming to better represent their product, champion the many people involved in its production, and highlight those across the world who directly benefit from it.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Agrico Branding</dd>
                <dt>Commissioned by</dt>
                <dd><LogoAgrico /></dd>
                <dt>Produced by</dt>
                <dd><LogoDasLab /></dd>
                <dt>My contribution</dt>
                <dd><b>Illustration & Storyboarding</b></dd>
                <dt>Additional credits</dt>
                <dd><b>Project lead</b> Rogier Dieks<br /></dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-sketch">
            <Tiles minWidth={240}>
                <img src="/assets/images/work/agrico/concept03.jpg" />
                <img src="/assets/images/work/agrico/concept01.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Aside id="project-quote"
            paddingTop={isMobile && 'var(--project-section-padding-top)'}
            paddingBottom={isMobile && 'var(--project-section-padding-bottom)'}
            width={'var(--app-width)'}
            height={isDesktop && 'min(540px, 35vw)'}
        >
            <Quote>
                <blockquote>
                    Reason and riper years tempered his warmth. And from the study of wisdom, he retained what is most difficult to compass &mdash; moderation.
                </blockquote>
                <figcaption>
                    <b>Tacitus</b>, <i>On the Life and Character of Julius Agricola</i>
                </figcaption>
            </Quote>
        </Project.Aside>

        <Project.Section id="project-briefing">
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/agrico/photo01.jpg" desktop />
                <img src="/assets/images/work/agrico/photo04.jpg" />
                <img src="/assets/images/work/agrico/photo03.jpg" />
                <img src="/assets/images/work/agrico/photo02.jpg" />
            </Gallery>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside id="project-story"
            paddingTop={0}
            paddingBottom={'var(--project-section-padding-bottom)'}
            width={'var(--app-width)'}
        >
            <Gallery>
                <img src="/assets/images/work/agrico/story01a.jpg" />
                <img src="/assets/images/work/agrico/story01b.jpg" />
                <img src="/assets/images/work/agrico/story01d.jpg" desktop />
                <img src="/assets/images/work/agrico/story03c.jpg" />
                <img src="/assets/images/work/agrico/story03d.jpg" />
                <img src="/assets/images/work/agrico/story01f.jpg" desktop />
            </Gallery>
            <p><b>Concept A</b> &mdash; The potato's journey.</p>
            <Gallery>
                <img src="/assets/images/work/agrico/story02a.jpg" mobile />
                <img src="/assets/images/work/agrico/story02c.jpg" />
                <img src="/assets/images/work/agrico/story02d.jpg" />
                <img src="/assets/images/work/agrico/story02e.jpg" />
            </Gallery>
            <p><b>Concept B</b> &mdash; The many hands of Agrico.</p>
            <Gallery>
                <img src="/assets/images/work/agrico/story04a.jpg" />
                <img src="/assets/images/work/agrico/story04b.jpg" />
                <img src="/assets/images/work/agrico/story04c.jpg" />
                <img src="/assets/images/work/agrico/story04e.jpg" mobile />
            </Gallery>
            <p><b>Concept C</b> &mdash; From petri to product.</p>
        </Project.Aside>

        <Project.Aside id="project-color">
            <Tiles aspectRatio={4 / 3} minWidth={isDesktop ? 360 : 120}>
                <img src="/assets/images/work/agrico/color18.jpg" />
                <img src="/assets/images/work/agrico/color02.jpg" />
                <img src="/assets/images/work/agrico/color03.jpg" />
                <img src="/assets/images/work/agrico/color06.jpg" />
                <img src="/assets/images/work/agrico/color11.jpg" />
                <img src="/assets/images/work/agrico/color05.jpg" />
                <img src="/assets/images/work/agrico/color07.jpg" />
                <img src="/assets/images/work/agrico/color19.jpg" />
                <img src="/assets/images/work/agrico/color04.jpg" />
                <img src="/assets/images/work/agrico/color15.jpg" />
                <img src="/assets/images/work/agrico/color10.jpg" />
                <img src="/assets/images/work/agrico/color17.jpg" />
                <img src="/assets/images/work/agrico/color08.jpg" />
                <img src="/assets/images/work/agrico/color09.jpg" />
                <img src="/assets/images/work/agrico/color20.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-production">
            <h2>Heading Title</h2>
            <hr />
            <h3>Production</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside id="project-stills"
            width={'var(--app-width-large)'}
        >
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/agrico/video03.jpg" />
                <img src="/assets/images/work/agrico/video04.jpg" />
                <img src="/assets/images/work/agrico/video06.jpg" />
                <img src="/assets/images/work/agrico/video08.jpg" desktop />
            </Gallery>
        </Project.Aside>

    </StyledProject>;

}