// I M P O R T

// Assets
import LogoDasLab from '#assets/vector/logos/das-lab.svg';
import LogoErasmusMC from '#assets/vector/logos/erasmus-mc.svg';

// Components
import Credits from '#components/widgets/Credits';
import Gallery from '#components/widgets/Gallery';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// S T Y L E D

const StyledProject = styled(Project)`

    /* header */

    #project-header {
        background: #1775f8;
    }

    #project-header h1,
    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #fc0;
    }

    /* presentation */

    #project-presentation {
        background: #1775f8;
    }

    /* design */

    #project-design {
        background: #e5decf;
    }

    /* result */

    #project-result {
        color: #fff;
        background: #0537d2;
    }

    #project-result hr {
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

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Eread</h1>
            <Image
                src="/assets/images/work/eread/poster02-element04.png"
                width={isDesktop ? '85%' : '100%'}
            />
            <p>EREAD is a proposed alteration and extension to Erasmus MC's labs and university. We designed an infographic to highlight how these changes will impact everyday work and life, and what can be expected in the near future.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Erasmus MC EREAD</dd>
                <dt>Commissioned by</dt>
                <dd><LogoErasmusMC /></dd>
                <dt>Produced by</dt>
                <dd><LogoDasLab /></dd>
                <dt>My contribution</dt>
                <dd><b>Graphic design & Copywriting</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Rogier Dieks
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-presentation"
            paddingBottom
            width={'var(--app-width-large)'}
        >
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/eread/presentation01.png" />
                <img src="/assets/images/work/eread/presentation02.png" />
                <img src="/assets/images/work/eread/presentation03.png" />
                <img src="/assets/images/work/eread/presentation04.png" />
            </Gallery>
        </Project.Aside>

        <Project.Aside id="project-chemistry"
            paddingTop
            width={'var(--app-width)'}
        >
            <Image src="/assets/images/work/eread/poster02-element08.png" />
        </Project.Aside>

        <Project.Section id="project-briefing">
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside id="project-design">
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/eread/poster02-element06.png" />
                <img src="/assets/images/work/eread/poster02-element07.png" />
            </Tiles>
        </Project.Aside>

        <Project.Section id="project-result"
            paddingBottom={0}
        >
            <Image src="/assets/images/work/eread/poster02-element10.png" />
            <h2>Heading title</h2>
            <hr />
            <h3>Result</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/eread/poster02-element05.png" />
        </Project.Section>

        <Project.Aside
            paddingTop
            width={'var(--app-width-large)'}
        >
            <Gallery columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/eread/poster01.jpg" />
                <img src="/assets/images/work/eread/poster02.jpg" />
            </Gallery>
        </Project.Aside>

    </StyledProject>;

}