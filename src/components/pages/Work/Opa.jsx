// I M P O R T

// Assets
import LogoPolygooi from '#assets/vector/logos/polygooi.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';

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
        background: #c9d1b9;
    }

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #dc143c;
    }

    /* story */

    #project-story {
        background: #f2f4e8;
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
        --page-background: #e1eadc;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>My Polish Grand&shy;father</h1>
            <Image src="/assets/images/work/opa/design06.png" />
            <p>The documentary <i>In the Footsteps of My Polish Grandfather</i> pays homage to the Polish heroism that helped liberate the Netherlands during the Second World War. My illustrations were used for educational material on its official website.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Website &ldquo;Mijn Poolse Opa&rdquo;</dd>
                <dt>Commissioned by</dt>
                <dd><LogoPolygooi /></dd>
                <dt>My contribution</dt>
                <dd><b>Illustration</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Koen van Groesen<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside height={isDesktop && 'min(800px, 60vw)'}>
            <Image src="/assets/images/work/opa/design01.png" />
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/opa/photo01.jpg" />
        </Project.Section>

        <Project.Aside height={isDesktop && 'min(800px, 60vw)'}>
            <Image src="/assets/images/work/opa/design03.png" />
        </Project.Aside>

        <Project.Section id="project-story">
            <Gallery>
                <img src="/assets/images/work/opa/story01.jpg" />
                <img src="/assets/images/work/opa/story02.jpg" />
                <img src="/assets/images/work/opa/story03.jpg" />
                <img src="/assets/images/work/opa/story08.jpg" />
                <img src="/assets/images/work/opa/story05.jpg" />
                <img src="/assets/images/work/opa/story07.jpg" />
            </Gallery>
            <p>Storyboard.</p>
            <Gallery>
                <img src="/assets/images/work/opa/color01.jpg" />
                <img src="/assets/images/work/opa/color02.jpg" />
                <img src="/assets/images/work/opa/color03.jpg" />
                <img src="/assets/images/work/opa/color04.jpg" />
                <img src="/assets/images/work/opa/color05.jpg" />
                <img src="/assets/images/work/opa/color07.jpg" />
            </Gallery>
            <p>Colorboard.</p>
        </Project.Section>

        <Project.Aside height={isDesktop && 'min(800px, 60vw)'}>
            <Image src="/assets/images/work/opa/design04.png" />
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/opa/design02.png" />
        </Project.Section>

    </StyledProject>;

}