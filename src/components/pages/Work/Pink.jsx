// I M P O R T

// Assets
import LogoPINK from '#assets/vector/logos/pink.svg';

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

// Utils
import useStyle from '#utils/hook/useStyle';

// S T Y L E D

const StyledProject = styled(Project)`

    h2 {
        color: #006b2f;
    }

    /* header */

    #project-header {
        background: #4fc561;
    }

    #project-header .credits__list-item svg,
    #project-header .credits__list-item:first-child dd {
        color: #e5e6c7;
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
        --page-background: #eef0dd;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <Image src="/assets/images/work/pink/element01.png" />
            <p>Over six months of careful considerations and countless designs, we drafted a new logo for PINK!, the youth movement associated with the Dutch Party for the Animals, in a design that captures both its ideals and spirit.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>PINK! Logo</dd>
                <dt>Commissioned by</dt>
                <dd><LogoPINK /></dd>
                <dt>My contribution</dt>
                <dd><b>Graphic design</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Project lead</b> Renée Baris<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Aside
            height={isDesktop && 'min(640px, 50vw)'}
        >
            <Tiles>
                <img src="/assets/images/work/pink/photo02.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <Image src="/assets/images/work/pink/element02.png" />
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/pink/logo-pvdd.jpg" />
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Gallery>
                <img src="/assets/images/work/pink/logo-dragonfly02.png" />
                <img src="/assets/images/work/pink/logo-dragonfly04.png" />
                <img src="/assets/images/work/pink/logo-dragonfly05.png" />
                <img src="/assets/images/work/pink/logo-dragonfly08.png" />
                <img src="/assets/images/work/pink/logo-dragonfly07.png" />
                <img src="/assets/images/work/pink/logo-dragonfly22.png" />
                <img src="/assets/images/work/pink/logo-dragonfly10.png" />
                <img src="/assets/images/work/pink/logo-dragonfly11.png" />
                <img src="/assets/images/work/pink/logo-dragonfly12.png" />
                <img src="/assets/images/work/pink/logo-dragonfly13.png" />
                <img src="/assets/images/work/pink/logo-dragonfly14.png" />
                <img src="/assets/images/work/pink/logo-dragonfly15.png" />
                <img src="/assets/images/work/pink/logo-dragonfly21.png" />
                <img src="/assets/images/work/pink/logo-dragonfly17.png" />
                <img src="/assets/images/work/pink/logo-dragonfly20.png" />
                <img src="/assets/images/work/pink/logo-dragonfly23.png" />
            </Gallery>
        </Project.Section>

        <Project.Aside>
            <Tiles
                aspectRatio={isDesktop ? 4 / 3 : 5 / 3}
                columns={isMobile && 3}
                minWidth={isDesktop && 360}
            >
                <img src="/assets/images/work/pink/concept01.jpg" />
                <img src="/assets/images/work/pink/concept02.jpg" />
                <img src="/assets/images/work/pink/concept03.jpg" />
                <img src="/assets/images/work/pink/concept04b.jpg" />
                <img src="/assets/images/work/pink/concept04a.jpg" />
                <img src="/assets/images/work/pink/concept04c.jpg" />
                <img src="/assets/images/work/pink/concept05b.jpg" />
                <img src="/assets/images/work/pink/concept05c.jpg" />
                <img src="/assets/images/work/pink/concept05a.jpg" />
                <img src="/assets/images/work/pink/concept07.jpg" />
                <img src="/assets/images/work/pink/concept06.jpg" />
                <img src="/assets/images/work/pink/concept08.jpg" />
                <img src="/assets/images/work/pink/design04.jpg" />
                <img src="/assets/images/work/pink/design05.jpg" />
                <img src="/assets/images/work/pink/design03.jpg" />
                <img src="/assets/images/work/pink/design02.jpg" />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header Title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/pink/photo01.jpg" />
        </Project.Section>

    </StyledProject>;

}