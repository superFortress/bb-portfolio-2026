// I M P O R T

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
        background: #000;
    }

    /* background */

    #project-background {
        color: #000;

        background-image: url("/assets/images/utility/tile-noise-light.jpg");
        background-repeat: repeat;
        background-size: 320px;
    }

    #project-background hr {
        background: #000;
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
        --page-background: #000;

        --rule-border-color: #fff;

        --text-color: #fff;
    `);

    // R E T U R N

    return <StyledProject>

        <Project.Header id="project-header">
            <h1>Year in Review</h1>
            <figure>
                <Video
                    poster="/assets/images/work/year/video10.jpg"
                    src="/assets/videos/work/year/final.mp4"
                />
            </figure>
            <p>We are taken through the dramatic ups and downs of an annual financial report during a dull PowerPoint presentation. This is a proof of concept animation that I made over the span of a week.</p>
            <Credits>
                <dt>Production title</dt>
                <dd>Year in Review</dd>
                <dt>My contribution</dt>
                <dd><b>Animation & Graphic design</b></dd>
                <dt>Additional credits</dt>
                <dd>
                    <b>Music</b> Suddenly Time Told<br />
                </dd>
            </Credits>
        </Project.Header>

        <Project.Section id="project-background">
            <h2>Header title</h2>
            <Image src="/assets/images/work/year/element01.png" />
            <hr />
            <h3>Background</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

        <Project.Aside>
            <Tiles columns={isDesktop ? 2 : 1}>
                <img src="/assets/images/work/year/design03.jpg" />
                <img src="/assets/images/work/year/design06.jpg" desktop />
                <img src="/assets/images/work/year/design08.jpg" />
                <img src="/assets/images/work/year/design04.jpg" desktop />
            </Tiles>
        </Project.Aside>

        <Project.Section>
            <h2>I'll just wait for the beat to kick in.</h2>
            <Image src="/assets/images/work/year/video13.jpg" />
            <hr />
            <h3>Result</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis bibendum ante lacinia suscipit ut id nibh. Sed gravida sapien vel ligula sagittis auctor. Vivamus egestas sapien et arcu sagittis, id volutpat eros suscipit. Donec eleifend maximus sagittis. Pellentesque imperdiet semper ante vitae interdum. Maecenas condimentum ex eu ipsum semper, vitae consequat orci placerat. Phasellus dignissim eros sed gravida tristique. Donec varius aliquet ipsum, a varius diam sagittis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget nunc ligula. Pellentesque condimentum lobortis lorem, mollis suscipit velit semper vitae. Nam ac pharetra magna. Quisque vel mauris commodo enim ultricies varius. Donec vitae quam molestie, aliquam tortor eget, porta augue. In nec accumsan quam.</p>
        </Project.Section>

    </StyledProject>;

}