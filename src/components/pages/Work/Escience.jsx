// I M P O R T

// Assets
import LogoEscienceCenter from '#assets/vector/logos/escience-center.svg';
import LogoRaadhuis from '#assets/vector/logos/raadhuis.svg';

// Components
import Credits from '#components/widgets/Credits';
import Image from '#components/widgets/Image';
import Project from '#components/widgets/Project';
import Tiles from '#components/widgets/Tiles';

// Modules
import styled from 'styled-components';

// Stores
import { useClientStore } from '#stores/useClientStore.js';

// S T Y L E D

const StyledProject = styled(Project)`

    --color-tint1: #e6e9d9;
    --color-tint2: #fafbf2;
    --color-tint3: #fff;
    --color-tint4: #dfe5e4;
    --color-tint5: #ecebe7;
    --color-tint6: #bfcac5;

    /* heading */

    #project-header {
        background: #63d6fd;
    }

    /* sketch-01 */

    #project-sketch-01 li:nth-child(6n + 1) { background: var(--color-tint1); }
    #project-sketch-01 li:nth-child(6n + 2) { background: var(--color-tint2); }
    #project-sketch-01 li:nth-child(6n + 3) { background: var(--color-tint3); }
    #project-sketch-01 li:nth-child(6n + 4) { background: var(--color-tint4); }

    #project-sketch-01 li img {
        mix-blend-mode: multiply;
    }

    /* sketch-02 */

    #project-sketch-02 li:nth-child(6n + 1) { background: var(--color-tint1); }
    #project-sketch-02 li:nth-child(6n + 2) { background: var(--color-tint2); }
    #project-sketch-02 li:nth-child(6n + 3) { background: var(--color-tint3); }
    #project-sketch-02 li:nth-child(6n + 4) { background: var(--color-tint4); }
    #project-sketch-02 li:nth-child(6n + 5) { background: var(--color-tint5); }
    #project-sketch-02 li:nth-child(6n + 6) { background: var(--color-tint6); }

    #project-sketch-02 li img {
        mix-blend-mode: multiply;
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
            <h1>eScience Center</h1>
            <Image src="/assets/images/work/escience/design02b.png" />
            <p>The Netherlands eScience Center supports scientists in their research. To better communicate their capabilities I was asked to provide them with a series of illustrations visualizing these processes.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>eScience Center Branding</dd>
                <dt>Commissioned by</dt>
                <dd><LogoEscienceCenter /></dd>
                <dt>Produced by</dt>
                <dd><LogoRaadhuis /></dd>
                <dt>My contribution</dt>
                <dd><b>Graphic design & Illustration</b></dd>
            </Credits>
        </Project.Header>

        <Project.Aside id="project-sketch-01">
            <Tiles aspectRatio={4 / 3} columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/escience/sketch-design01.jpg" />
                <img src="/assets/images/work/escience/sketch-design02.jpg" />
                <img src="/assets/images/work/escience/sketch-design03.jpg" />
                <img src="/assets/images/work/escience/sketch-design04.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>Header title</h2>
            <hr />
            <h3>Briefing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
            <Image src="/assets/images/work/escience/design03.png" />
        </Project.Section>

        <Project.Aside id="project-sketch-02">
            <Tiles aspectRatio={1} minWidth={isDesktop ? 360 : 160}>
                <img src="/assets/images/work/escience/sketch-icon01a.jpg" desktop />
                <img src="/assets/images/work/escience/sketch-icon01b.jpg" />
                <img src="/assets/images/work/escience/sketch-icon01c.jpg" />
                <img src="/assets/images/work/escience/sketch-icon01d.jpg" desktop />
                <img src="/assets/images/work/escience/sketch-icon02a.jpg" />
                <img src="/assets/images/work/escience/sketch-icon02b.jpg" desktop />
                <img src="/assets/images/work/escience/sketch-icon03a.jpg" />
                <img src="/assets/images/work/escience/sketch-icon03b.jpg" />
                <img src="/assets/images/work/escience/sketch-icon03c.jpg" desktop />
                <img src="/assets/images/work/escience/sketch-icon04a.jpg" />
                <img src="/assets/images/work/escience/sketch-icon04b.jpg" />
                <img src="/assets/images/work/escience/sketch-icon04d.jpg" />
                <img src="/assets/images/work/escience/sketch-icon05a.jpg" desktop />
                <img src="/assets/images/work/escience/sketch-icon06a.jpg" />
                <img src="/assets/images/work/escience/sketch-icon06b.jpg" />
                <img src="/assets/images/work/escience/sketch-icon05b.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <Image src="/assets/images/work/escience/design01b.png" />
            <h2>Header title</h2>
            <hr />
            <h3>Result</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside>
            <Tiles aspectRatio={1} columns={isDesktop ? 4 : 2}>
                <img src="/assets/images/work/escience/icon01b.png" desktop />
                <img src="/assets/images/work/escience/icon01a.png" />
                <img src="/assets/images/work/escience/icon03c.png" />
                <img src="/assets/images/work/escience/icon02a.png" />
                <img src="/assets/images/work/escience/icon04a.png" />
                <img src="/assets/images/work/escience/icon04b.png" desktop />
                <img src="/assets/images/work/escience/icon05a.png" />
                <img src="/assets/images/work/escience/icon03a.png" />
            </Tiles>
        </Project.Aside>

    </StyledProject>;

}